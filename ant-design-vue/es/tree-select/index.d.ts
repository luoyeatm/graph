import { Plugin } from 'vue';
import { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from '../vc-tree-select';
export { TreeData, TreeSelectProps } from './interface';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            "onUpdate:value": (...args: any[]) => any;
            loadData: (...args: any[]) => any;
            searchPlaceholder: string;
            treeExpandedKeys: unknown[];
            treeDefaultExpandedKeys: unknown[];
            treeNodeFilterProp: string;
            treeNodeLabelProp: string;
            replaceFields: {
                [key: string]: any;
            };
            onTreeExpand: (...args: any[]) => any;
            "onUpdate:treeExpandedKeys": (...args: any[]) => any;
            "onUpdate:searchValue": (...args: any[]) => any;
        }> & Omit<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            searchPlaceholder: string;
            treeExpandedKeys: unknown[];
            treeDefaultExpandedKeys: unknown[];
            treeNodeFilterProp: string;
            treeNodeLabelProp: string;
            replaceFields: {
                [key: string]: any;
            };
        } & {
            value?: string | number | unknown[] | {
                [key: string]: any;
            };
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            multiple?: boolean;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            defaultActiveFirstOption?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: import("../_util/type").VueNode;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: string | number | unknown[] | {
                [key: string]: any;
            };
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
            "onUpdate:value"?: (...args: any[]) => any;
            loadData?: (...args: any[]) => any;
            filterTreeNode?: boolean | Function;
            showCheckedStrategy?: "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD";
            treeCheckable?: boolean;
            treeCheckStrictly?: boolean;
            treeData?: {
                [key: string]: any;
            }[];
            treeDataSimpleMode?: boolean | {
                [key: string]: any;
            };
            treeDefaultExpandAll?: boolean;
            treeIcon?: boolean;
            onTreeExpand?: (...args: any[]) => any;
            "onUpdate:treeExpandedKeys"?: (...args: any[]) => any;
            "onUpdate:searchValue"?: (...args: any[]) => any;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "children" | "getPopupContainer" | "prefixCls" | "direction" | "onFocus" | "onBlur" | "onChange" | "onKeydown" | "onKeyup" | "onClick" | "onMousedown" | "onMouseenter" | "onMouseleave" | "onSelect" | "onDeselect" | "id" | "options" | "searchValue" | "optionLabelProp" | "optionFilterProp" | "animation" | "maxTagCount" | "maxTagTextLength" | "tokenSeparators" | "tagRender" | "choiceTransitionName" | "onInputKeyDown" | "onSearch" | "transitionName" | "dropdownStyle" | "dropdownClassName" | "dropdownRender" | "showAction" | "inputValue" | "onClear" | "listHeight" | "listItemHeight" | "onPopupScroll" | "onDropdownVisibleChange" | "internalProps" | "bordered" | "onUpdate:value" | "loadData" | "searchPlaceholder" | "treeExpandedKeys" | "treeDefaultExpandedKeys" | "treeNodeFilterProp" | "treeNodeLabelProp" | "replaceFields" | "onTreeExpand" | "onUpdate:treeExpandedKeys" | "onUpdate:searchValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            children: unknown[];
            prefixCls: string;
            direction: string;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            choiceTransitionName: string;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            showAction: unknown[];
            inputValue: string;
            listHeight: number;
            listItemHeight: number;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            searchPlaceholder: string;
            treeExpandedKeys: unknown[];
            treeDefaultExpandedKeys: unknown[];
            treeNodeFilterProp: string;
            treeNodeLabelProp: string;
            replaceFields: {
                [key: string]: any;
            };
        } & {
            value?: string | number | unknown[] | {
                [key: string]: any;
            };
            getPopupContainer?: (...args: any[]) => any;
            virtual?: boolean;
            dropdownMatchSelectWidth?: boolean;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onKeydown?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
            onMousedown?: (...args: any[]) => any;
            onMouseenter?: (...args: any[]) => any;
            onMouseleave?: (...args: any[]) => any;
            onSelect?: (...args: any[]) => any;
            tabindex?: string | number;
            onDeselect?: (...args: any[]) => any;
            multiple?: boolean;
            disabled?: boolean;
            size?: "default" | "small" | "middle" | "large";
            open?: boolean;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            defaultActiveFirstOption?: boolean;
            notFoundContent?: import("../_util/type").VueNode;
            menuItemSelectedIcon?: import("../_util/type").VueNode;
            labelInValue?: boolean;
            filterOption?: any;
            autofocus?: boolean;
            removeIcon?: import("../_util/type").VueNode;
            maxTagPlaceholder?: import("../_util/type").VueNode;
            tagRender?: (...args: any[]) => any;
            placeholder?: import("../_util/type").VueNode;
            showSearch?: boolean;
            onInputKeyDown?: (...args: any[]) => any;
            onSearch?: (...args: any[]) => any;
            dropdownRender?: (...args: any[]) => any;
            dropdownAlign?: any;
            defaultValue?: string | number | unknown[] | {
                [key: string]: any;
            };
            autoClearSearchValue?: boolean;
            onClear?: (...args: any[]) => any;
            allowClear?: boolean;
            clearIcon?: import("../_util/type").VueNode;
            showArrow?: boolean;
            defaultOpen?: boolean;
            loading?: boolean;
            onPopupScroll?: (...args: any[]) => any;
            onDropdownVisibleChange?: (...args: any[]) => any;
            suffixIcon?: import("../_util/type").VueNode;
            itemIcon?: import("../_util/type").VueNode;
            "onUpdate:value"?: (...args: any[]) => any;
            loadData?: (...args: any[]) => any;
            filterTreeNode?: boolean | Function;
            showCheckedStrategy?: "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD";
            treeCheckable?: boolean;
            treeCheckStrictly?: boolean;
            treeData?: {
                [key: string]: any;
            }[];
            treeDataSimpleMode?: boolean | {
                [key: string]: any;
            };
            treeDefaultExpandAll?: boolean;
            treeIcon?: boolean;
            onTreeExpand?: (...args: any[]) => any;
            "onUpdate:treeExpandedKeys"?: (...args: any[]) => any;
            "onUpdate:searchValue"?: (...args: any[]) => any;
        }>, {
            vcTreeSelect: any;
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
        }, unknown, {}, {
            saveTreeSelect(node: any): void;
            focus(): void;
            blur(): void;
            renderSwitcherIcon(prefixCls: string, { isLeaf, loading }: {
                isLeaf: any;
                loading: any;
            }): JSX.Element;
            handleChange(...args: any[]): void;
            handleTreeExpand(...args: any[]): void;
            handleSearch(...args: any[]): void;
            updateTreeData(treeData: any[]): any;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            children: unknown[];
            getPopupContainer: (...args: any[]) => any;
            prefixCls: string;
            direction: string;
            onFocus: (...args: any[]) => any;
            onBlur: (...args: any[]) => any;
            onChange: (...args: any[]) => any;
            onKeydown: (...args: any[]) => any;
            onKeyup: (...args: any[]) => any;
            onClick: (...args: any[]) => any;
            onMousedown: (...args: any[]) => any;
            onMouseenter: (...args: any[]) => any;
            onMouseleave: (...args: any[]) => any;
            onSelect: (...args: any[]) => any;
            onDeselect: (...args: any[]) => any;
            id: string;
            options: unknown[];
            searchValue: string;
            optionLabelProp: string;
            optionFilterProp: string;
            animation: string;
            maxTagCount: number;
            maxTagTextLength: number;
            tokenSeparators: unknown[];
            tagRender: (...args: any[]) => any;
            choiceTransitionName: string;
            onInputKeyDown: (...args: any[]) => any;
            onSearch: (...args: any[]) => any;
            transitionName: string;
            dropdownStyle: {
                [key: string]: any;
            };
            dropdownClassName: string;
            dropdownRender: (...args: any[]) => any;
            showAction: unknown[];
            inputValue: string;
            onClear: (...args: any[]) => any;
            listHeight: number;
            listItemHeight: number;
            onPopupScroll: (...args: any[]) => any;
            onDropdownVisibleChange: (...args: any[]) => any;
            internalProps: {
                [key: string]: any;
            };
            bordered: boolean;
            "onUpdate:value": (...args: any[]) => any;
            loadData: (...args: any[]) => any;
            searchPlaceholder: string;
            treeExpandedKeys: unknown[];
            treeDefaultExpandedKeys: unknown[];
            treeNodeFilterProp: string;
            treeNodeLabelProp: string;
            replaceFields: {
                [key: string]: any;
            };
            onTreeExpand: (...args: any[]) => any;
            "onUpdate:treeExpandedKeys": (...args: any[]) => any;
            "onUpdate:searchValue": (...args: any[]) => any;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        children: unknown[];
        prefixCls: string;
        direction: string;
        id: string;
        options: unknown[];
        searchValue: string;
        optionLabelProp: string;
        optionFilterProp: string;
        animation: string;
        maxTagCount: number;
        maxTagTextLength: number;
        tokenSeparators: unknown[];
        choiceTransitionName: string;
        transitionName: string;
        dropdownStyle: {
            [key: string]: any;
        };
        dropdownClassName: string;
        showAction: unknown[];
        inputValue: string;
        listHeight: number;
        listItemHeight: number;
        internalProps: {
            [key: string]: any;
        };
        bordered: boolean;
        searchPlaceholder: string;
        treeExpandedKeys: unknown[];
        treeDefaultExpandedKeys: unknown[];
        treeNodeFilterProp: string;
        treeNodeLabelProp: string;
        replaceFields: {
            [key: string]: any;
        };
    } & {
        value?: string | number | unknown[] | {
            [key: string]: any;
        };
        getPopupContainer?: (...args: any[]) => any;
        virtual?: boolean;
        dropdownMatchSelectWidth?: boolean;
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        onMousedown?: (...args: any[]) => any;
        onMouseenter?: (...args: any[]) => any;
        onMouseleave?: (...args: any[]) => any;
        onSelect?: (...args: any[]) => any;
        tabindex?: string | number;
        onDeselect?: (...args: any[]) => any;
        multiple?: boolean;
        disabled?: boolean;
        size?: "default" | "small" | "middle" | "large";
        open?: boolean;
        mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
        defaultActiveFirstOption?: boolean;
        notFoundContent?: import("../_util/type").VueNode;
        menuItemSelectedIcon?: import("../_util/type").VueNode;
        labelInValue?: boolean;
        filterOption?: any;
        autofocus?: boolean;
        removeIcon?: import("../_util/type").VueNode;
        maxTagPlaceholder?: import("../_util/type").VueNode;
        tagRender?: (...args: any[]) => any;
        placeholder?: import("../_util/type").VueNode;
        showSearch?: boolean;
        onInputKeyDown?: (...args: any[]) => any;
        onSearch?: (...args: any[]) => any;
        dropdownRender?: (...args: any[]) => any;
        dropdownAlign?: any;
        defaultValue?: string | number | unknown[] | {
            [key: string]: any;
        };
        autoClearSearchValue?: boolean;
        onClear?: (...args: any[]) => any;
        allowClear?: boolean;
        clearIcon?: import("../_util/type").VueNode;
        showArrow?: boolean;
        defaultOpen?: boolean;
        loading?: boolean;
        onPopupScroll?: (...args: any[]) => any;
        onDropdownVisibleChange?: (...args: any[]) => any;
        suffixIcon?: import("../_util/type").VueNode;
        itemIcon?: import("../_util/type").VueNode;
        "onUpdate:value"?: (...args: any[]) => any;
        loadData?: (...args: any[]) => any;
        filterTreeNode?: boolean | Function;
        showCheckedStrategy?: "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD";
        treeCheckable?: boolean;
        treeCheckStrictly?: boolean;
        treeData?: {
            [key: string]: any;
        }[];
        treeDataSimpleMode?: boolean | {
            [key: string]: any;
        };
        treeDefaultExpandAll?: boolean;
        treeIcon?: boolean;
        onTreeExpand?: (...args: any[]) => any;
        "onUpdate:treeExpandedKeys"?: (...args: any[]) => any;
        "onUpdate:searchValue"?: (...args: any[]) => any;
    }> & import("vue").ShallowUnwrapRef<{
        vcTreeSelect: any;
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
    }> & {} & {} & {
        saveTreeSelect(node: any): void;
        focus(): void;
        blur(): void;
        renderSwitcherIcon(prefixCls: string, { isLeaf, loading }: {
            isLeaf: any;
            loading: any;
        }): JSX.Element;
        handleChange(...args: any[]): void;
        handleTreeExpand(...args: any[]): void;
        handleSearch(...args: any[]): void;
        updateTreeData(treeData: any[]): any;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    children: unknown[];
    prefixCls: string;
    direction: string;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    choiceTransitionName: string;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    showAction: unknown[];
    inputValue: string;
    listHeight: number;
    listItemHeight: number;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
    searchPlaceholder: string;
    treeExpandedKeys: unknown[];
    treeDefaultExpandedKeys: unknown[];
    treeNodeFilterProp: string;
    treeNodeLabelProp: string;
    replaceFields: {
        [key: string]: any;
    };
} & {
    value?: string | number | unknown[] | {
        [key: string]: any;
    };
    getPopupContainer?: (...args: any[]) => any;
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    tabindex?: string | number;
    onDeselect?: (...args: any[]) => any;
    multiple?: boolean;
    disabled?: boolean;
    size?: "default" | "small" | "middle" | "large";
    open?: boolean;
    mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    defaultActiveFirstOption?: boolean;
    notFoundContent?: import("../_util/type").VueNode;
    menuItemSelectedIcon?: import("../_util/type").VueNode;
    labelInValue?: boolean;
    filterOption?: any;
    autofocus?: boolean;
    removeIcon?: import("../_util/type").VueNode;
    maxTagPlaceholder?: import("../_util/type").VueNode;
    tagRender?: (...args: any[]) => any;
    placeholder?: import("../_util/type").VueNode;
    showSearch?: boolean;
    onInputKeyDown?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
    dropdownRender?: (...args: any[]) => any;
    dropdownAlign?: any;
    defaultValue?: string | number | unknown[] | {
        [key: string]: any;
    };
    autoClearSearchValue?: boolean;
    onClear?: (...args: any[]) => any;
    allowClear?: boolean;
    clearIcon?: import("../_util/type").VueNode;
    showArrow?: boolean;
    defaultOpen?: boolean;
    loading?: boolean;
    onPopupScroll?: (...args: any[]) => any;
    onDropdownVisibleChange?: (...args: any[]) => any;
    suffixIcon?: import("../_util/type").VueNode;
    itemIcon?: import("../_util/type").VueNode;
    "onUpdate:value"?: (...args: any[]) => any;
    loadData?: (...args: any[]) => any;
    filterTreeNode?: boolean | Function;
    showCheckedStrategy?: "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD";
    treeCheckable?: boolean;
    treeCheckStrictly?: boolean;
    treeData?: {
        [key: string]: any;
    }[];
    treeDataSimpleMode?: boolean | {
        [key: string]: any;
    };
    treeDefaultExpandAll?: boolean;
    treeIcon?: boolean;
    onTreeExpand?: (...args: any[]) => any;
    "onUpdate:treeExpandedKeys"?: (...args: any[]) => any;
    "onUpdate:searchValue"?: (...args: any[]) => any;
}>, {
    vcTreeSelect: any;
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
}, unknown, {}, {
    saveTreeSelect(node: any): void;
    focus(): void;
    blur(): void;
    renderSwitcherIcon(prefixCls: string, { isLeaf, loading }: {
        isLeaf: any;
        loading: any;
    }): JSX.Element;
    handleChange(...args: any[]): void;
    handleTreeExpand(...args: any[]): void;
    handleSearch(...args: any[]): void;
    updateTreeData(treeData: any[]): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    children: unknown[];
    getPopupContainer: (...args: any[]) => any;
    prefixCls: string;
    direction: string;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    onKeydown: (...args: any[]) => any;
    onKeyup: (...args: any[]) => any;
    onClick: (...args: any[]) => any;
    onMousedown: (...args: any[]) => any;
    onMouseenter: (...args: any[]) => any;
    onMouseleave: (...args: any[]) => any;
    onSelect: (...args: any[]) => any;
    onDeselect: (...args: any[]) => any;
    id: string;
    options: unknown[];
    searchValue: string;
    optionLabelProp: string;
    optionFilterProp: string;
    animation: string;
    maxTagCount: number;
    maxTagTextLength: number;
    tokenSeparators: unknown[];
    tagRender: (...args: any[]) => any;
    choiceTransitionName: string;
    onInputKeyDown: (...args: any[]) => any;
    onSearch: (...args: any[]) => any;
    transitionName: string;
    dropdownStyle: {
        [key: string]: any;
    };
    dropdownClassName: string;
    dropdownRender: (...args: any[]) => any;
    showAction: unknown[];
    inputValue: string;
    onClear: (...args: any[]) => any;
    listHeight: number;
    listItemHeight: number;
    onPopupScroll: (...args: any[]) => any;
    onDropdownVisibleChange: (...args: any[]) => any;
    internalProps: {
        [key: string]: any;
    };
    bordered: boolean;
    "onUpdate:value": (...args: any[]) => any;
    loadData: (...args: any[]) => any;
    searchPlaceholder: string;
    treeExpandedKeys: unknown[];
    treeDefaultExpandedKeys: unknown[];
    treeNodeFilterProp: string;
    treeNodeLabelProp: string;
    replaceFields: {
        [key: string]: any;
    };
    onTreeExpand: (...args: any[]) => any;
    "onUpdate:treeExpandedKeys": (...args: any[]) => any;
    "onUpdate:searchValue": (...args: any[]) => any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly TreeNode: typeof TreeNode;
    readonly SHOW_ALL: typeof SHOW_ALL;
    readonly SHOW_PARENT: typeof SHOW_PARENT;
    readonly SHOW_CHILD: typeof SHOW_CHILD;
};
export default _default;
