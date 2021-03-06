import { ExtractPropTypes } from 'vue';
declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "danger", "link"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["circle", "circle-outline", "round"];
export declare type ButtonShape = typeof ButtonShapes[number];
declare const ButtonSizes: ["large", "default", "small"];
export declare type ButtonSize = typeof ButtonSizes[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
declare const buttonProps: () => {
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeDef<"default" | "link" | "dashed" | "ghost" | "danger" | "primary">;
    htmlType: import("vue-types").VueTypeDef<"reset" | "button" | "submit"> & {
        default: "reset" | "button" | "submit";
    };
    shape: import("vue-types").VueTypeDef<"circle" | "round" | "circle-outline">;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large"> & {
        default: "default" | "small" | "large";
    };
    loading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    ghost: import("vue-types").VueTypeValidableDef<boolean>;
    block: import("vue-types").VueTypeValidableDef<boolean>;
    icon: import("vue-types").VueTypeValidableDef<import("../_util/type").VueNode>;
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>;
export default buttonProps;
