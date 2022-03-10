import { attrEnum } from "@/enum/common";
import { Algorithm, NodeType } from "@/typings/graph";
import { Graph, Dom, Node } from "@antv/x6";
import { sliderMarks } from "@/enum/common";
import { stat } from "fs";
import { attr } from "@antv/x6/lib/util/dom/attr";
export const algorithm = {
    // run = () => {

    //     if (!isRun.value) {
    //       timer = setInterval(() => {
    //         api.graph.node.lists(graph.data).then((nodes: any) => {
    //           nodes.map((node: NodeType) => {
    //             let currentNode = (graph.ant as Graph).getCellById(node.nodeId);
    //             currentNode.setAttrByPath(attrEnum.label, "");

    //             if (currentNode) {
    //               if (currentNode.data.message === "模拟量") {
    //                 currentNode.setAttrByPath(
    //                   attrEnum.label,
    //                   node.pre + ":" + getNum(node.data) + node.after
    //                 );
    //                 currentNode.setAttrByPath(attrEnum.fontSize, "5");

    //               } else if (currentNode.data.message === "开关量") {
    //                 currentNode.setAttrByPath(attrEnum.label, node.pre);
    //                 currentNode.setAttrByPath(attrEnum.color, "#000000");
    //               }
    //               // else if (currentNode.data.message === "警告") {
    //               //   currentNode.setAttrByPath(attrEnum.lable, node.pre);
    //               //   currentNode.setAttrByPath(attrEnum.color, "#000000");
    //               // }

    //               // currentNode.setAttrByPath(attrEnum.lable, node.data);
    //               //算法组件
    //               if (node.active) {
    //                 let type = currentNode.data.type;
    //                 if (type) {
    //                   let template = nodeTemplateMap[type] as NodeFormItem[];
    //                   if (template) {
    //                     let algorithms = template.filter((item) => {
    //                       return item.type === "algorithm";
    //                     });
    //                     algorithms.map((item) => {
    //                       item.algorithm.run(
    //                         currentNode,
    //                         graph.ant,
    //                         node.active,
    //                         node.data
    //                       );
    //                     });
    //                   }
    //                 }
    //               }
    //             }
    //           });
    //         });
    //       }, 3000);
    //     }
    //   };
    run: (node: Node, nodeDatas: NodeType[], graph: Graph) => {
        if (node && node.data) {
            if (node.data.type) {
                if (node.data)
                    if (algorithm[node.data.type]) {
                        console.log(node.data.type + "-----------------------")
                        algorithm[node.data.type](node, nodeDatas, graph)
                    }

            }
        }
    },
    on_off: (node: Node, nodeDatas: NodeType[], graph: Graph) => {
        let ref = graph.getCellById(node.data.refId)
        console.log(ref)
        let value = ref.getAttrByPath(attrEnum.label)
        console.log(value)

        if (!value || value == "True" || value == "False") {
            return
        }
        ref.data.history = value
        if (node.data.binary && node.data.binary == '2') {
            let binValue = parseInt(value as string).toString(2)
            let position = node.data.numLength - node.data.numPosition
            console.log(binValue)
            value = binValue.substring(binValue.length - position - 1, binValue.length - position)
            console.log(position)
            console.log(value)
        }

        if (value == node.data.open) {
            ref.setAttrByPath(attrEnum.label, "True")

        } else {
            ref.setAttrByPath(attrEnum.label, "False")
        }

    },
    ref: (node: Node, nodeDatas: NodeType[], graph: Graph) => {
        console.log(node.data.refId);
        console.log(node.data.refType);
        let parent = graph.getCellById(node.data.refId)

        let children = parent.getChildren();
        let max = 0;
        let type = "";
        let after = ""
        if (node.data.refType === "T") {
            type = "温度"
            after = "°C"
        } else if (node.data.refType === "P") {
            type = "压力"
            after = "kpa"
        }
        else if (node.data.refType === "F") {
            type = "流量"
            after = "m3/h"
        }
        children.map((item) => {
            console.log(item.data)
            // if()
            if (item.data.pre && (item.data.pre as string).indexOf(type) > -1) {
                let num = parseFloat(item.getAttrByPath(attrEnum.label))
                if (max < num) {
                    max = num
                }
            }
        })

        if (node.data.after) {
            after = node.data.after
        }
        node.setAttrByPath(attrEnum.label, max + after)

    },
    image: (node: Node, nodeDatas: NodeType[]) => {
        console.log("-----------------------")
        const children = node.getChildren()
        let state = false;
        let alarm = false;
        // let count = 0;
        if (children) {
            children.map((child) => {

                if (child.data.type = "parent") {
                    console.log(child)
                    const grandSon = child.getChildren()
                    if (grandSon) {
                        grandSon.map((child) => {
                            if (child.data.message && (child.data.message === "开关量" || child.data.message === "警告")) {
                                let childData = child.getAttrByPath(attrEnum.label)
                                if (childData) {
                                    if (childData == "True" || childData == "1") {
                                        state = true
                                        child.data.state = true
                                    } else if (childData == "False" || childData == "0") {
                                        child.data.state = false
                                    } else {
                                        child.data.state = false
                                    }
                                }
                            }
                        })

                    }
                }

            })
        }
        node.data.state = state
        node.data.alarm = alarm
    },
    waterHight: (node: Node, nodeDatas: NodeType[]) => { algorithm.getChildrenAverage(node, nodeDatas, "液位") },
    parent: (node: Node, nodeDatas: NodeType[]) => {
        // algorithm.getChildrenAverage(node,nodeDatas,"") 
        algorithm.getMax(node, nodeDatas, "")
    },
    getMax: (node: Node, nodeDatas: NodeType[], type: string) => {
        let max = 0
        let children = node.getChildren()
        if (children) {
            children.map((child) => {

                if (child.data.type = "parent") {
                    const grandSon = child.getChildren()
                    if (grandSon) {
                        grandSon.map((item) => {
                            if (item.data.pre && (item.data.pre as string).indexOf(type) > -1) {
                                let num = parseFloat(item.getAttrByPath(attrEnum.label))
                                if (max < num) {
                                    max = num
                                }
                            }
                        })
                    }
                }
            })

        }
        node.data.data = max
    },
    getChildrenAverage: (node: Node, nodeDatas: NodeType[], type: string) => {
        const children = node.getChildren()
        let add = 0;
        let count = 0;
        if (children) {
            children.map((child) => {
                if (child.data.message && child.data.message === "模拟量") {
                    let childData = nodeDatas.filter((nodeData) => { return nodeData.nodeId === child.id })
                    if (childData.length > 0) {
                        let childDataNum = parseInt(childData[0].data)
                        let childDataType: string = childData[0].pre
                        if (childDataType.search(type) > -1 && childDataNum > 0) {
                            add += parseInt(childData[0].data)
                            count++;
                        }
                    }
                }
                if (child.data.type = "parent") {
                    const grandSon = child.getChildren()
                    if (grandSon) {
                        grandSon.map((child) => {
                            if (child.data.message && child.data.message === "模拟量") {
                                let childData = nodeDatas.filter((nodeData) => { return nodeData.nodeId === child.id })
                                if (childData.length > 0) {
                                    let childDataNum = parseInt(childData[0].data)
                                    let childDataType: string = childData[0].pre
                                    if (childDataType.search(type) > -1 && childDataNum > 0) {
                                        add += parseInt(childData[0].data)
                                        count++;
                                    }
                                }
                            }
                        })
                    }
                }

            })

        }
        let average = 0
        if (count != 0) {
            average = add / count
            if (node.data.max) {
                average = average / node.data.max
            }
        }
        node.data.data = average
    },
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
            // if (active) {
            //     // node.hide()
            //     let activeArr = active.split(',')
            //     if (activeArr.length === this.form.length) {
            //         const formula = data + activeArr[0] + activeArr[1]
            //         // console.log(formula)
            //         const view = graph.findView(node);
            //         if (view) {
            //             const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
            //             if (eval(formula)) {
            //                 if (node.data.message === "警告") {
            //                     Dom.addClass(contentElem, "warn")
            //                     let point = node.getPosition()
            //                     let nodes = graph.getNodesFromPoint(point)
            //                     nodes.map(_node => {

            //                         if (_node.id !== node.id) {
            //                             const _point = _node.getPosition()
            //                             if (point.y == _point.y && point.x == _point.x) {
            //                                 const view = graph.findView(_node);
            //                                 if (_node.data.message == "模拟量") {
            //                                     // const contentElem = view.findOne("text") as HTMLElement
            //                                     // // console.log(contentElem)
            //                                     // Dom.addClass(contentElem, "hidden")
            //                                     _node.setAttrByPath(attrEnum.color, "#ff0000")
            //                                 } else if (_node.data.message == "开关量") {
            //                                     const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
            //                                     // console.log(contentElem)
            //                                     Dom.addClass(contentElem, "hidden")
            //                                 }
            //                             }
            //                         }
            //                     })
            //                     // nodes = null
            //                 } else if (node.data.message === "开关量") {
            //                     contentElem.style.backgroundColor = "#00ff00"
            //                     // } else if (node.data.message === "模拟量") { 
            //                     //     Dom.addClass(contentElem,"stop")
            //                 }
            //                 // Dom.removeClass(contentElem,activeArr[2])
            //             } else {
            //                 if (node.data.message === "警告") {
            //                     Dom.removeClass(contentElem, "warn")
            //                     const point = node.getPosition()
            //                     const nodes = graph.getNodesFromPoint(point)
            //                     nodes.map(_node => {
            //                         if (_node.id !== node.id) {
            //                             if (point.y == _node.getPosition().y) {
            //                                 const view = graph.findView(_node);
            //                                 if (_node.data.message == "模拟量") {
            //                                     // const contentElem = view.findOne("text") as HTMLElement
            //                                     // // console.log(contentElem)
            //                                     // Dom.removeClass(contentElem, "hidden")
            //                                     _node.setAttrByPath(attrEnum.color, "#00ff00")
            //                                 } else if (_node.data.message == "开关量") {
            //                                     const contentElem = view.findOne("foreignObject > body > div>div") as HTMLElement
            //                                     // console.log(contentElem)
            //                                     Dom.removeClass(contentElem, "hidden")
            //                                 }
            //                             }
            //                         }
            //                     })
            //                 } else if (node.data.message === "开关量") {
            //                     contentElem.style.backgroundColor = "yellow"
            //                     //             // Dom.addClass(contentElem, "stop")
            //                     //             // } else if (node.data.message === "模拟量") { 
            //                     //             //     Dom.addClass(contentElem,"stop")
            //                 }
            //                 //         // Dom.addClass(contentElem,activeArr[2])
            //             }
            //         }
            //     }
            //     activeArr = null
            // }
        },
        form: [
            { name: "symbol", label: "符号", type: "symbol" },
            { name: "value", label: "阈值", defult: "0", type: "number" },
            { name: "class1", label: "动画类", defult: "validating", type: "text" },
        ]
    } as Algorithm
}
