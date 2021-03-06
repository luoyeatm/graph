import { ExtractPropTypes, PropType } from 'vue';
import { MenuTheme, MenuMode, BuiltinPlacements, TriggerSubMenuAction } from './interface';
import { CSSMotionProps } from '../../_util/transition';
export declare const menuProps: {
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    openKeys: ArrayConstructor;
    selectedKeys: ArrayConstructor;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
};
export declare type MenuProps = Partial<ExtractPropTypes<typeof menuProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    openKeys: ArrayConstructor;
    selectedKeys: ArrayConstructor;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "select" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey")[], "select" | "click" | "update:openKeys" | "openChange" | "deselect" | "update:selectedKeys" | "update:activeKey", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    multiple: boolean;
    disabled: boolean;
    mode: MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: TriggerSubMenuAction;
    disabledOverflow: boolean;
    selectable: boolean;
    theme: MenuTheme;
} & {
    getPopupContainer?: (node: HTMLElement) => HTMLElement;
    prefixCls?: string;
    builtinPlacements?: unknown;
    selectedKeys?: unknown[];
    motion?: unknown;
    openKeys?: unknown[];
    activeKey?: string;
}>, {
    multiple: boolean;
    disabled: boolean;
    mode: MenuMode;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: TriggerSubMenuAction;
    disabledOverflow: boolean;
    selectable: boolean;
    theme: MenuTheme;
}>;
export default _default;
