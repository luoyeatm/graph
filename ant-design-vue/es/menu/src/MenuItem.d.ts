import { ExtractPropTypes } from 'vue';
declare const menuItemProps: {
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
};
export declare type MenuItemProps = Partial<ExtractPropTypes<typeof menuItemProps>>;
declare const _default: import("vue").DefineComponent<{
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "focus" | "keydown" | "mouseenter" | "mouseleave")[], "click" | "focus" | "keydown" | "mouseenter" | "mouseleave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    danger: boolean;
} & {
    icon?: import("../../_util/type").VueNode;
    title?: string | boolean;
    role?: string;
}>, {
    title: string | boolean;
    disabled: boolean;
    danger: boolean;
}>;
export default _default;
