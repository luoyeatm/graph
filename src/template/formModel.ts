import { attrEnum, sliderMarks } from "@/enum/common"
import { NodeFormItem } from "@/typings/graph"
import { algorithm } from "./algorithm";
import { nodeFunc, domFunc } from "./funcModel"
import { Node, Graph } from "@antv/x6"
import view from "./viewModel"
import { nodeCenter } from "@antv/x6/lib/registry/node-anchor/node-center";
/**自定义 node 编辑区 */
const nodeTemplate = {

    nodeFormText: [
        {
            name: "title",
            label: "标题",
            attr: attrEnum.label,
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

            func: nodeFunc.zIndex,
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
    nodeFormLabel: [
        {
            name: "title",
            label: "标题",
            attr: attrEnum.label,
            type: "text",
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
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            marks: sliderMarks,
        },


    ] as NodeFormItem[],
    nodeFormParent: [
        {
            name: "id",
            label: "id",
            type:"text",
            func: (node,value)=>{
                return node.id
            }
        },
        {
            name: "title",
            label: "标题",
            type:"text",
            func: (node,value)=>{
                return nodeFunc.setData(node,value,"title")
            }
        },{
            name: "color",
            label: "背景颜色",
            attr: attrEnum.backgroundColor,
            type: "color",
        },

        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            marks: sliderMarks,
        },
        {
            name: "show",
            label: "显示",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "show")
                // view.initWaterHight(node)
                return value
            },
            init: true
        },


    ] as NodeFormItem[],
    nodeFormParentTable: [

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
            func: nodeFunc.zIndex,
            marks: sliderMarks,
        },
        {
            name: "row",
            label: "行",
            type: "number",
            func: (node, value) => {
                let data = nodeFunc.setData(node, value, "row")
                if (value) {
                    view.parentTable(node)
                }
                return data
            },
        },
        {
            name: "col",
            label: "列",
            type: "number",
            func: (node, value) => {
                let data = nodeFunc.setData(node, value, "col")
                if (value) {
                    view.parentTable(node)
                }
                return data
            },
        },
        {
            name: "borderColor",
            label: "边框颜色",
            type: "color",
            func: (node, value) => {
                let data = nodeFunc.setData(node, value, "borderColor")
                if (value) {
                    view.parentTable(node)
                }
                return data
            },
        },


    ] as NodeFormItem[],
    nodeFormCircle: [
        {
            name: "title",
            label: "标题",
            attr: attrEnum.label,
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
            func: nodeFunc.zIndex,
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
            dom: domFunc.innerHtml
        },
        {
            name: "num",

            save: "num",

        },
        // {
        //     name: "pre",

        //     save: "pre",

        // },
        {
            name: "after",
            label: "单位",
            type: "text",
            func: (node, value) => {
                return nodeFunc.setData(node, value, "after")
            },
        },
        {
            name: "type",

            save: "type",

        }, 
        {
            name: "max",
            label: "量程",
            type: "number",
            func: (node, value) => {
                return nodeFunc.setData(node, value, "max")
            },
        },
        {
            name: "fontSize",
            label: "字体大小",
            defult: "14",
            type: "text",
            dom: domFunc.fontSize,
        },
        {
            name: "fontColor",
            label: "字体颜色",
            dom: domFunc.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            dom: domFunc.backgroundColor,
            type: "color",
        },{
            name: "id",
            label: "id",
            type:"text",
            func: (node,value)=>{
                return node.id
            }
        },
        {
            name: "message",
            label: "类型",

            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "message")
                return value
            }
        },
        {
            name: "pre",
            label: "类型2",

            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "pre")
                return value
            }
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            dom: domFunc.zIndex,
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
            dom: domFunc.innerHtml
        },
        {
            name: "fontSize",
            label: "字体大小",
            defult: "14",
            type: "text",
            dom: domFunc.fontSize,
        },
        {
            name: "fontColor",
            label: "字体颜色",
            dom: domFunc.color,
            type: "color",
        },
        {
            name: "color",
            label: "背景颜色",
            dom: domFunc.backgroundColor,
            type: "color",
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            dom: domFunc.zIndex,
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
    svg:[
        {
            name: "image",
            label: "svg",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "image")
                view.svg(node)
                return value
            }
        },
        {
            name: "rotate",
            label: "旋转",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "rotate")
                view.svg(node)
                return value
            }
        },
        {
            name: "scaleX",
            label: "縮放翻轉水平",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "scaleX")
                view.svg(node)
                return value
            }
        },
        {
            name: "scaleY",
            label: "垂直",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "scaleY")
                view.svg(node)
                return value
            }
        },        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
    ]as NodeFormItem[],
    image:[
        {
            name: "open",
            label: "开启image",

            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "open")
                view.image(node)
                return value
            }
        },{
            name: "close",
            label: "关闭image",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "close")
                view.image(node)
                return value
            }
        },{
            name: "rotate",
            label: "旋转",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "rotate")
                view.image(node)
                return value
            }
        },{
            name: "alarmImage",
            label: "告警image",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "alarmImage")
                view.image(node)
                return value
            }
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
    ]as NodeFormItem[],
    ref:[
        {
            name: "refId",
            label: "关联Id",

            type: "text",
            func: (node, value) => {
                return nodeFunc.setData(node,value,"refId")
            }
        },{
            name: "refType",
            label: "关联类型",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "refType")
                return value
            }
        },{
            name: "note",
            label: "备注",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "note")
                return value
            }
        },
        {
            name: "after",
            label: "后缀",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "after")
                return value
            }
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
    ]as NodeFormItem[],
    on_off:[
        {
            name: "refId",
            label: "关联Id",

            type: "text",
            func: (node, value) => {
                return nodeFunc.setData(node,value,"refId")
            }
        },{
            name: "binary",
            label: "进制",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "binary")
                return value
            }
        },
        {
            name: "numPosition",
            label: "判断数位",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "numPosition")
                return value
            }
        },
        {
            name: "numLenth",
            label: "数位补齐",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "numLength")
                return value
            }
        },
        {
            name: "open",
            label: "开启值",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "open")
                return value
            }
        },
       
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },
    ]as NodeFormItem[],
    waterHight: [
        {
            name: "data",
            label: "数据",
            type: "data",
            init: true,
        },
        {
            name: "size",
            label: "比列",
            type: "number",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "size")
                view.waterHight(node)
                return value
            },
            init: true
        },
        {
            name: "amplitude",
            label: "波峰",
            type: "number",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "amplitude")
                view.waterHight(node)
                return value
            },
            init: true
        },
        {
            name: "width",
            label: "宽度",
            type: "number",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "width")

                view.waterHight(node)
                return value
            }

        },
        {
            name: "height",
            label: "高度",
            type: "number",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "height")
                view.waterHight(node)
                return value
            }
        },
        {
            name: "color",
            label: "颜色",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "color")
                view.waterHight(node)
                return value
            }
        }, {
            name: "hudu",
            label: "弧度",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "hudu")
                view.waterHight(node)
                return value
            }
        }, {
            name: "qingxie",
            label: "倾斜",
            type: "text",
            func: (node, value) => {
                value = nodeFunc.setData(node, value, "qingxie")
                view.waterHight(node)
                return value
            }
        },
        {
            name: "max",
            label: "量程",
            type: "number",
            func: (node, value) => {
                return nodeFunc.setData(node, value, "max")
            },
        },
        {
            name: "zIndex",
            label: "显示层级",
            type: "number-slider",
            func: nodeFunc.zIndex,
            // save: "defultValue",
            marks: sliderMarks,
        },

    ] as NodeFormItem[],
}
//模版表单属性
export const nodeTemplateMap = {
    text: nodeTemplate.nodeFormText,
    circle: nodeTemplate.nodeFormCircle,
    html: nodeTemplate.nodeFormHtml,
    warn: nodeTemplate.nodeFormWarn,
    label: nodeTemplate.nodeFormLabel,
    parent: nodeTemplate.nodeFormParent,
    parentTable: nodeTemplate.nodeFormParentTable,
    waterHight: nodeTemplate.waterHight,
    image: nodeTemplate.image,
    ref: nodeTemplate.ref,
    on_off: nodeTemplate.on_off,
    svg: nodeTemplate.svg,

}
export const getFormByNode = (node: Node): NodeFormItem[] => {
    if (node && node.data && node.data.type)
        return nodeTemplateMap[node.data.type]
}
// export const createAndUpdateHtml=(node:Node,elem?:Element):HTMLElement=>{
//     let nodeForm = getFormByNode(node)

//     let initMethod = node.getData().init
//     console.log(node.getData())
//     initMethod += "("
//     nodeForm.map((item)=>{
//         if(item.init){
//           initMethod+=  node.data[item.name]
//           initMethod+=  ","
//         }
//     })
//     initMethod += "elem,node)"
//     console.log(initMethod)
//     nodeForm = null
//     return view.initWaterHight(node.data.data,node.data.size,elem,node) as HTMLElement
// }
export const getView = (node: Node, graph: Graph) => {
    if (node.shape === "html") {
        const view = graph.findView(node);
        const contentElem = view.findOne(
            "foreignObject > body > div>div"
        ) as HTMLElement;
        if (!contentElem) {
            return contentElem
        }
    }
}