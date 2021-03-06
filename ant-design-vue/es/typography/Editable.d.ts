declare const Editable: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    value: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    autoSize: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }>;
    onSave: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onCancel: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onEnd: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    originContent: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("end" | "change" | "cancel" | "save")[], "end" | "change" | "cancel" | "save", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string;
    prefixCls: string;
    maxlength: number;
    originContent: string;
} & {
    onChange?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    autoSize?: boolean | {
        [key: string]: any;
    };
    onSave?: (...args: any[]) => any;
    onEnd?: (...args: any[]) => any;
}>, {
    value: string;
    prefixCls: string;
    onChange: (...args: any[]) => any;
    onCancel: (...args: any[]) => any;
    maxlength: number;
    onSave: (...args: any[]) => any;
    onEnd: (...args: any[]) => any;
    originContent: string;
}>;
export default Editable;
