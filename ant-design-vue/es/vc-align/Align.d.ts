import { PropType } from 'vue';
import { AlignType, AlignResult, TargetType } from './interface';
declare type OnAlign = (source: HTMLElement, result: AlignResult) => void;
export interface AlignProps {
    align: AlignType;
    target: TargetType;
    onAlign?: OnAlign;
    monitorBufferTime?: number;
    monitorWindowResize?: boolean;
    disabled?: boolean;
}
export interface RefAlign {
    forceAlign: () => void;
}
declare const _default: import("vue").DefineComponent<{
    align: PropType<AlignType>;
    target: PropType<TargetType>;
    onAlign: PropType<OnAlign>;
    monitorBufferTime: NumberConstructor;
    monitorWindowResize: BooleanConstructor;
    disabled: BooleanConstructor;
}, () => import("vue").VNode<any, any, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "align"[], "align", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    monitorWindowResize: boolean;
} & {
    align?: unknown;
    target?: unknown;
    onAlign?: OnAlign;
    monitorBufferTime?: number;
}>, {
    disabled: boolean;
    monitorWindowResize: boolean;
}>;
export default _default;
