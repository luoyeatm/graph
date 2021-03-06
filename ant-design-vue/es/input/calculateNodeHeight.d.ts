export interface NodeType {
    sizingStyle: string;
    paddingSize: number;
    borderSize: number;
    boxSizing: string;
}
export declare function calculateNodeStyling(node: HTMLElement, useCache?: boolean): NodeType;
export default function calculateNodeHeight(uiTextNode: HTMLTextAreaElement, useCache?: boolean, minRows?: number | null, maxRows?: number | null): {
    height: string;
    minHeight: string;
    maxHeight: string;
    overflowY: string;
    resize: string;
};
