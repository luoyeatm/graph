import { NodeFormItem, Algorithm } from "@/typings/graph";
import { Graph, Dom, Node } from "@antv/x6";
import { message } from "ant-design-vue";
/** antv/x6 node 可修改属性枚举 svg节点使用*/
export const attrEnum = {
    //标题
    lable: "label/text",
    //字体大小
    fontSize: "label/fontSize",
    //字体颜色
    color: "label/fill",
    //主体颜色
    backgroundColor: "body/fill",
}
//仅限html 类型节点使用，原生svg节点不生效
export const domEnum = {
    //标题
    innerHtml: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.innerHTML = value
        } else {
            return elem.innerHTML
        }
    },
    //字体大小
    fontSize: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.style.fontSize = value + "px"
        } else {
            let fontSize = elem.style.fontSize
            return fontSize ? fontSize.substr(0, fontSize.length - 2) : "14"
        }
    },
    //字体颜色
    color: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.style.color = value
        } else {
            if (elem.style.color) {
                return elem.style.color
            } else {
                return "#000000"
            }

        }
    },
    //主体颜色
    backgroundColor: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.style.backgroundColor = value
        } else {
            return elem.style.backgroundColor ? elem.style.backgroundColor : "#00000000"
        }
    },
    //层级
    zIndex: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.style.zIndex = value
        } else {
            return elem.style.zIndex
        }
    },
    //边框
    border: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.style.border = value
        } else {
            return elem.style.border
        }
    },
    //类
    class: (elem: HTMLElement, value: string) => {
        if (value) {
            elem.classList.value = value
        } else {
            return elem.classList.value
        }
    },
}

export const funcEnum = {
    zIndex: (node: Node, value?: number) => {
        if (value) {
            node.setZIndex(value)
        } else {
            return node.getZIndex()
        }
    }

}
/** antd slider 滑块显示数据 */
const sliderMarks = {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "100",
};
const algorithm = {
    //符号型算法
    symbol: {
        run(node: Node, graph: Graph, active: string, data: string) {
            if (active) {
                let activeArr = active.split(',')
                if (activeArr.length === this.form.length) {
                    const formula = data + activeArr[0] + activeArr[1]
                    // console.log(formula)
                    if (eval(formula)) {
                        node.setAttrByPath(attrEnum.backgroundColor, activeArr[2])
                        node.setZIndex(parseInt(activeArr[4]))
                    } else {
                        node.setAttrByPath(attrEnum.backgroundColor, activeArr[3])
                        node.setZIndex(parseInt(activeArr[5]))
                        setTimeout(() => { node.setAttrByPath(attrEnum.backgroundColor, "none") }, 1000)
                    }
                }
            }
        },
        form: [
            { name: "symbol", label: "符号", type: "symbol" },
            { name: "value", label: "阈值", defult: "0", type: "number" },
            { name: "color1", label: "颜色true", defult: "#000000", type: "color" },
            { name: "color2", label: "颜色false", defult: "#000000", type: "color" },
            {
                name: "zIndex1",
                label: "层级true",
                type: "number-slider",
                defult: 0,
                marks: sliderMarks,
            },
            {
                name: "zIndex2",
                label: "层级false",
                type: "number-slider",
                defult: 0,
                marks: sliderMarks,
            },
        ]
    } as Algorithm,
    symbolDom: {
        run(node: Node, graph: Graph, active: string, data: string) {
            if (active) {
                let activeArr = active.split(',')
                if (activeArr.length === this.form.length) {
                    const formula = data + activeArr[0] + activeArr[1]
                    // console.log(formula)
                    const view = graph.findView(node);
                    const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
                    if (eval(formula)) {
                        if (node.data.message === "警告") {
                            Dom.addClass(contentElem, "warn")
                            const point = node.getPosition()
                            const nodes = graph.getNodesFromPoint(point)
                            // console.log(nodes)
                            // console.log("--------------------------------------------------")
                            nodes.map(_node => {
                                // console.log(_node.getPosition())

                                if (_node.id !== node.id) {
                                    const _point = _node.getPosition()
                                    if (point.y == _point.y&&point.x==_point.x) {
                                        const view = graph.findView(_node);
                                        if(_node.data.message=="模拟量"){
                                        // const contentElem = view.findOne("text") as HTMLElement
                                        // // console.log(contentElem)
                                        // Dom.addClass(contentElem, "hidden")
                                        _node.setAttrByPath(attrEnum.color,"#ff0000")
                                        }else if(_node.data.message=="开关量"){
                                            const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
                                            // console.log(contentElem)
                                            Dom.addClass(contentElem, "hidden")
                                        }
                                    }
                                }
                            })
                        } else if (node.data.message === "开关量") {
                            contentElem.style.backgroundColor="#00ff00"
                            // } else if (node.data.message === "模拟量") { 
                            //     Dom.addClass(contentElem,"stop")
                        }
                        // Dom.removeClass(contentElem,activeArr[2])
                    } else {
                        if (node.data.message === "警告") {
                            Dom.removeClass(contentElem, "warn")
                            const point = node.getPosition()
                            const nodes = graph.getNodesFromPoint(point)
                            nodes.map(_node => {
                                if (_node.id !== node.id) {
                                    if (point.y == _node.getPosition().y) {
                                        const view = graph.findView(_node);
                                        if(_node.data.message=="模拟量"){
                                        // const contentElem = view.findOne("text") as HTMLElement
                                        // // console.log(contentElem)
                                        // Dom.removeClass(contentElem, "hidden")
                                        _node.setAttrByPath(attrEnum.color,"#00ff00")
                                        }else if(_node.data.message=="开关量"){
                                            const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
                                            // console.log(contentElem)
                                            Dom.removeClass(contentElem, "hidden")
                                        }
                                    }
                                }
                            })
                        } else if (node.data.message === "开关量") {
                            contentElem.style.backgroundColor="yellow"
                            // Dom.addClass(contentElem, "stop")
                            // } else if (node.data.message === "模拟量") { 
                            //     Dom.addClass(contentElem,"stop")
                        }
                        // Dom.addClass(contentElem,activeArr[2])
                    }
                }

            }
        },
        form: [
            { name: "symbol", label: "符号", type: "symbol" },
            { name: "value", label: "阈值", defult: "0", type: "number" },
            { name: "class1", label: "动画类", defult: "validating", type: "text" },
        ]
    } as Algorithm
}

/**自定义 node 编辑区 */
const nodeTemplate = {

    nodeFormText: [
        {
            name: "title",
            label: "标题",
            attr: attrEnum.lable,
            type: "text",
            save: "title",
        },
        {
            name: "fontSize",
            label: "字体大小",
            attr: attrEnum.fontSize,
            defult: 14,
            type: "number",
        },
        {
            name: "fontColor",
            label: "字体颜色",
            attr: attrEnum.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            attr: attrEnum.backgroundColor,
            type: "color",
        },
        {
            name: "data",
            label: "默认值",
            type: "number",
            save: "data",
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",

            func: funcEnum.zIndex,
            marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },

        {
            name: "algorithm",
            label: "算法组件",
            type: "algorithm",
            save: "active",
            algorithm: algorithm.symbol,
        },
    ] as NodeFormItem[],

    nodeFormCircle: [
        {
            name: "title",
            label: "标题",
            attr: attrEnum.lable,
            type: "text",
            save: "title",
        },
        {
            name: "fontSize",
            label: "字体大小",
            defult: "14",
            attr: attrEnum.fontSize,
            type: "number",
        },
        {
            name: "fontColor",
            label: "字体颜色",
            attr: attrEnum.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            attr: attrEnum.backgroundColor,
            type: "color",
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: funcEnum.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },
        {
            name: "algorithm",
            label: "算法组件",
            type: "algorithm",
            save: "active",
            algorithm: algorithm.symbol,
        },
    ] as NodeFormItem[],
    nodeFormHtml: [
        {
            name: "title",
            label: "标题",
            type: "text",
            save: "title",
            dom: domEnum.innerHtml
        },
        {
            name: "num",

            save: "num",

        },
        {
            name: "pre",

            save: "pre",

        },
        {
            name: "after",

            save: "after",

        },
        {
            name: "type",

            save: "type",

        },
        {
            name: "fontSize",
            label: "字体大小",
            defult: "14",
            type: "text",
            dom: domEnum.fontSize,
        },
        {
            name: "fontColor",
            label: "字体颜色",
            dom: domEnum.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            dom: domEnum.backgroundColor,
            type: "color",
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            dom: domEnum.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },
        {
            name: "algorithm",
            label: "算法组件",
            type: "algorithm",
            save: "active",
            algorithm: algorithm.symbolDom,
        },
    ] as NodeFormItem[],
    nodeFormWarn: [
        {
            name: "title",
            label: "标题",
            type: "text",
            save: "title",
            dom: domEnum.innerHtml
        },
        {
            name: "fontSize",
            label: "字体大小",
            defult: "14",
            type: "text",
            dom: domEnum.fontSize,
        },
        {
            name: "fontColor",
            label: "字体颜色",
            dom: domEnum.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            dom: domEnum.backgroundColor,
            type: "color",
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            dom: domEnum.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },
        {
            name: "algorithm",
            label: "算法组件",
            type: "algorithm",
            save: "active",
            algorithm: algorithm.symbolDom,
        },
    ] as NodeFormItem[],
}

export const nodeTemplateMap = {
    text: nodeTemplate.nodeFormText,
    circle: nodeTemplate.nodeFormCircle,
    html: nodeTemplate.nodeFormHtml,
    warn: nodeTemplate.nodeFormWarn
}
