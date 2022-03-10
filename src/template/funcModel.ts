//自定义函数
import { Graph, Dom, Node } from "@antv/x6";
export const nodeFunc = {
    zIndex: (node: Node, value?: number) => {
        console.log(node.getZIndex())
        if (value) {
            node.setZIndex(value)
        } else {
            return node.getZIndex()
        }
    },   
    width: (node: Node, value?: number) => {
        let size = node.getSize()
        if (value) {
            size.width = value
            node.setSize(size)
        } else {
            return size.width
        }
    },

    height: (node: Node, value?: number) => {
        let size = node.getSize()
        if (value) {
            size.height = value
           node.setSize(size)
        } else {
            return size.height
        }
    },
    
    setData: (node: Node ,value?: string,key?:string) => {
        console.log(node.getZIndex())
        if (value) {
            node.data[key] = value
        } else {
            return node.data[key]
        }
    },



}
//仅限html 类型节点使用，原生svg节点不生效
export const domFunc = {
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



