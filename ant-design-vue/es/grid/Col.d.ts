import { ExtractPropTypes } from 'vue';
declare type ColSpanType = number | string;
export interface ColSize {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}
export declare const colSize: import("vue-types").VueTypeLooseShape<{
    span: string | number;
    order: string | number;
    offset: string | number;
    push: string | number;
    pull: string | number;
}>;
declare const colProps: {
    span: import("vue-types").VueTypeDef<string | number>;
    order: import("vue-types").VueTypeDef<string | number>;
    offset: import("vue-types").VueTypeDef<string | number>;
    push: import("vue-types").VueTypeDef<string | number>;
    pull: import("vue-types").VueTypeDef<string | number>;
    xs: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    sm: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    md: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    lg: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    xl: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    xxl: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flex: import("vue-types").VueTypeDef<string | number>;
};
export declare type ColProps = Partial<ExtractPropTypes<typeof colProps>>;
declare const _default: import("vue").DefineComponent<{
    span: import("vue-types").VueTypeDef<string | number>;
    order: import("vue-types").VueTypeDef<string | number>;
    offset: import("vue-types").VueTypeDef<string | number>;
    push: import("vue-types").VueTypeDef<string | number>;
    pull: import("vue-types").VueTypeDef<string | number>;
    xs: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    sm: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    md: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    lg: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    xl: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    xxl: import("vue-types").VueTypeDef<string | number | {
        span: string | number;
        order: string | number;
        offset: string | number;
        push: string | number;
        pull: string | number;
    }>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flex: import("vue-types").VueTypeDef<string | number>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
}>, {
    prefixCls: string;
}>;
export default _default;
