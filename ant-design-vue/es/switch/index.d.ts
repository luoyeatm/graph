import { ExtractPropTypes, nextTick } from 'vue';
export declare const SwitchSizes: ["small", "default", "large"];
declare const switchProps: {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    checkedChildren: import("vue-types").VueTypeValidableDef<any>;
    unCheckedChildren: import("vue-types").VueTypeValidableDef<any>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    autofocus: import("vue-types").VueTypeValidableDef<boolean>;
    loading: import("vue-types").VueTypeValidableDef<boolean>;
    checked: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onKeydown: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onMouseup: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:checked': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type SwitchProps = Partial<ExtractPropTypes<typeof switchProps>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMouseup: (...args: any[]) => any;
            "onUpdate:checked": (...args: any[]) => any;
        }> & Omit<Readonly<{
            prefixCls: string;
        } & {
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMouseup?: (...args: any[]) => any;
            tabindex?: string | number;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            autofocus?: boolean;
            loading?: boolean;
            checked?: boolean;
            "onUpdate:checked"?: (...args: any[]) => any;
            checkedChildren?: any;
            unCheckedChildren?: any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onChange" | "onKeydown" | "onClick" | "onMouseup" | "onUpdate:checked">;
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
        $emit: (event: "change" | "click" | "keydown" | "mouseup" | "update:checked", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            prefixCls: string;
        } & {
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMouseup?: (...args: any[]) => any;
            tabindex?: string | number;
            disabled?: boolean;
            size?: "default" | "small" | "large";
            autofocus?: boolean;
            loading?: boolean;
            checked?: boolean;
            "onUpdate:checked"?: (...args: any[]) => any;
            checkedChildren?: any;
            unCheckedChildren?: any;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "keydown" | "mouseup" | "update:checked")[], string, {
            prefixCls: string;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMouseup: (...args: any[]) => any;
            "onUpdate:checked": (...args: any[]) => any;
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
        prefixCls: string;
    } & {
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        onMouseup?: (...args: any[]) => any;
        tabindex?: string | number;
        disabled?: boolean;
        size?: "default" | "small" | "large";
        autofocus?: boolean;
        loading?: boolean;
        checked?: boolean;
        "onUpdate:checked"?: (...args: any[]) => any;
        checkedChildren?: any;
        unCheckedChildren?: any;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls: string;
} & {
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMouseup?: (...args: any[]) => any;
    tabindex?: string | number;
    disabled?: boolean;
    size?: "default" | "small" | "large";
    autofocus?: boolean;
    loading?: boolean;
    checked?: boolean;
    "onUpdate:checked"?: (...args: any[]) => any;
    checkedChildren?: any;
    unCheckedChildren?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "keydown" | "mouseup" | "update:checked")[], "change" | "click" | "keydown" | "mouseup" | "update:checked", {
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    onMouseup: (...args: any[]) => any;
    "onUpdate:checked": (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
