import { PropType } from 'vue';
declare const ResizeObserver: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    onResize: PropType<(size: {
        width: number;
        height: number;
        offsetWidth: number;
        offsetHeight: number;
    }, element: HTMLElement) => void>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
} & {
    onResize?: (size: {
        width: number;
        height: number;
        offsetWidth: number;
        offsetHeight: number;
    }, element: HTMLElement) => void;
}>, {
    disabled: boolean;
}>;
export default ResizeObserver;
