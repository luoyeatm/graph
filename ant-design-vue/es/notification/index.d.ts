import { VNodeTypes, CSSProperties } from 'vue';
export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type IconType = 'success' | 'info' | 'error' | 'warning';
export interface ConfigProps {
    top?: string | number;
    bottom?: string | number;
    duration?: number;
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
    closeIcon?: VNodeTypes;
}
export interface ArgsProps {
    message: VNodeTypes;
    description?: VNodeTypes;
    btn?: VNodeTypes;
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: VNodeTypes;
    placement?: NotificationPlacement;
    style?: CSSProperties;
    prefixCls?: string;
    class?: string;
    readonly type?: IconType;
    onClick?: () => void;
    top?: string;
    bottom?: string;
    getContainer?: () => HTMLElement;
    closeIcon?: VNodeTypes;
}
declare const api: any;
export default api;
