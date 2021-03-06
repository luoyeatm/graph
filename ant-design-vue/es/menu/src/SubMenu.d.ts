import { PropType, ExtractPropTypes } from 'vue';
declare const subMenuProps: {
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
};
export declare type SubMenuProps = Partial<ExtractPropTypes<typeof subMenuProps>>;
declare const _default: import("vue").DefineComponent<{
    icon: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    title: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mouseenter" | "mouseleave" | "titleClick")[], "mouseenter" | "mouseleave" | "titleClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    internalPopupClose: boolean;
} & {
    icon?: import("../../_util/type").VueNode;
    title?: import("../../_util/type").VueNode;
    popupClassName?: string;
    popupOffset?: number[];
    level?: number;
    eventKey?: string;
}>, {
    disabled: boolean;
    internalPopupClose: boolean;
}>;
export default _default;
