import { VNode } from 'vue';
declare const DropdownButtonProps: {
    type: import("vue-types").VueTypeDef<"default" | "dashed" | "ghost" | "danger" | "primary"> & {
        default: "default" | "dashed" | "ghost" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large"> & {
        default: "default" | "small" | "large";
    };
    htmlType: import("vue-types").VueTypeDef<"reset" | "button" | "submit"> & {
        default: "reset" | "button" | "submit";
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter"> & {
        default: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:visible': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    trigger: {
        type: import("vue").PropType<"click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[]>;
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    minOverlayWidthMatchTrigger: import("vue-types").VueTypeValidableDef<boolean>;
};
export { DropdownButtonProps };
declare const _default: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeDef<"default" | "dashed" | "ghost" | "danger" | "primary"> & {
        default: "default" | "dashed" | "ghost" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"default" | "small" | "large"> & {
        default: "default" | "small" | "large";
    };
    htmlType: import("vue-types").VueTypeDef<"reset" | "button" | "submit"> & {
        default: "reset" | "button" | "submit";
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean>;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placement: import("vue-types").VueTypeDef<"bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter"> & {
        default: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onClick: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    onVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    'onUpdate:visible': import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    trigger: {
        type: import("vue").PropType<"click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[]>;
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: import("vue-types").VueTypeValidableDef<boolean>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    getPopupContainer: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    transitionName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    overlayStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties>;
    forceRender: import("vue-types").VueTypeValidableDef<boolean>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    openClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    minOverlayWidthMatchTrigger: import("vue-types").VueTypeValidableDef<boolean>;
}, {
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
    popupRef: any;
}, unknown, {}, {
    savePopupRef(ref: VNode): void;
    handleClick(e: Event): void;
    handleVisibleChange(val: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "visibleChange" | "update:visible")[], "click" | "visibleChange" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "default" | "dashed" | "ghost" | "danger" | "primary";
    prefixCls: string;
    title: string;
    size: "default" | "small" | "large";
    align: {
        [key: string]: any;
    };
    transitionName: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[];
    placement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    overlayClassName: string;
    openClassName: string;
    href: string;
    htmlType: "reset" | "button" | "submit";
} & {
    icon?: any;
    getPopupContainer?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    disabled?: boolean;
    visible?: boolean;
    overlay?: any;
    forceRender?: boolean;
    onVisibleChange?: (...args: any[]) => any;
    overlayStyle?: import("vue").CSSProperties;
    "onUpdate:visible"?: (...args: any[]) => any;
    minOverlayWidthMatchTrigger?: boolean;
}>, {
    type: "default" | "dashed" | "ghost" | "danger" | "primary";
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    title: string;
    onClick: (...args: any[]) => any;
    size: "default" | "small" | "large";
    align: {
        [key: string]: any;
    };
    transitionName: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    trigger: "click" | "contextmenu" | "hover" | ("click" | "contextmenu" | "hover")[];
    onVisibleChange: (...args: any[]) => any;
    placement: "bottomRight" | "bottomLeft" | "topLeft" | "topRight" | "topCenter" | "bottomCenter";
    overlayClassName: string;
    openClassName: string;
    "onUpdate:visible": (...args: any[]) => any;
    href: string;
    htmlType: "reset" | "button" | "submit";
}>;
export default _default;
