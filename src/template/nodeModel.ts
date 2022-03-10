//注册节点模版
//数组中的对象会被加载为模版
import view from "./viewModel"
import { Graph, Node } from "@antv/x6"
const height = 60
const width = 60
//文本标签 用于显示文本标记
const text = {
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "none",
            stroke: "none",
        },
        label: {
            text: "文本标签",
            fill: "#50E3C2",
            fontSize: "9",
        },
    },
    data: {
        type: "label",
    },
}
const ref ={
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "none",
            stroke: "none",
        },
        label: {
            text: "ref",
            fill: "#50E3f2",
            fontSize: "9",
        },
    },
    data: {
        type: "ref",
    },
}
const on_off ={
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "none",
            stroke: "none",
        },
        label: {
            text: "on_off",
            fill: "#50E3f2",
            fontSize: "9",
        },
    },
    data: {
        type: "on_off",
    },
}
const image = {
    shape: "html",
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "none",
            stroke: "none",
        },
    },
    html: () => {
        return view.image()
    },
    data: {
        type: "image",
        parent: true,
    }
}
const imageArr = [
    "0124-合成抠图_03.png",
    "0124-合成抠图_05.png",
    "0124-合成抠图_08.png",
    "0124-合成抠图_11.png",
    "0124-合成抠图_16.png",
    "0124-合成抠图_19.png",
    "0124-合成抠图_23.png",
    "0124-合成抠图_28.png",
    "0124-合成抠图_32.png",
    "0124-合成抠图_37.png",
    "0124-合成抠图_41.png",
    "0124-合成抠图_44.png",
    "0124-合成抠图_47.png",
    "0124-合成抠图_50.png",
    "0124-合成抠图_53.png",
    "0124-合成抠图_59.png",
    "0124-合成抠图_61.png",
    "0124-合成抠图_63.png",

]
const imageNodeArr = () => {
    let arr = []
    imageArr.map((item) => {
        arr.push({
            shape: "html",
            width: width,
            height: height,
            attrs: {
                body: {
                    fill: "none",
                    stroke: "none",
                },
            },
            html: () => {
                return view.image("b/" + item)
            },
            data: {
                type: "image",
                parent: true,
                close: "b/" + item
            }
        })
    })
    return arr

}
const svgArr = [
    "001.svg",
    "002.svg",
    "003.svg",
    "004.svg",
    "005.svg",
    "006.svg",
    "007.svg",
    "008.svg",
    "009.svg",
    "010.svg",
    "011.svg",
    "012.svg",
    "013.svg",
    "014.svg",
    "015.svg",
    "016.svg",
    "017.svg",
    "018.svg",
    "019.svg",
    "020.svg",
    "021.svg",
    "022.svg",
    "023.svg",
    "024.svg",
    "025.svg",


]
const svgNodeArr = () => {
    let arr = []
    svgArr.map((item) => {
        arr.push({
            shape: "html",
            width: width,
            height: height,
            attrs: {
                body: {
                    fill: "none",
                    stroke: "none",
                },
            },
            html: () => {
                return view.svg(item)
            },
            data: {
                type: "svg",
                parent: true,
                image:  item
            }
        })
    })
    return arr

}
//数据标签 用于获取数值
const val = {
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "none",
            stroke: "none",
        },
        label: {
            text: "数据标签",
            fill: "#50E3C2",
            fontSize: "9",
        },
    },
    data: {
        type: "html",
    }
}
//基础圆形
const circle = {
    shape: "circle",
    width: width,
    height: height,
    label: "circle",
    attrs: {
        body: {
            fill: "#efdbff",
            stroke: "none",
        },
    },
    data: {
        type: "circle",
    },
}

//基础父组件
const parent = {
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "#4A4A4A",
            // stroke: "#ffa940",
        },
    },
    data: {
        type: "parent",
        parent: true,
    },
}
const parentTable = {
    shape: "html",
    width: width,
    height: height,
    attrs: {
        body: {
            fill: "#4A4a4a",
            // stroke: "#4A8Add44",
        },
    },
    data: {
        type: "parentTable",
        parent: true,
        init: " ",
        col: 2,
        row: 3,
        borderColor: "#ffa940"
    },
    html: () => {
        return view.parentTable()
    },
}
const waterHight = {
    shape: "html",
    width: width,
    height: height,
    data: {
        type: "waterHight",
        parent: true,
        init: "view.initWaterHight",
        size: 1,
        data: 0.6

    },
    html: () => {
        //主体

        return view.waterHight()
    },
}
const mnl = {
    shape: "html",
    width: 60,
    height: 60,
    // label: "html",
    html: () => {
        const wrap = document.createElement("div");
        wrap.style.width = "100%";
        wrap.style.height = "100%";
        wrap.innerText = "模拟量";
        return wrap;
    },
    data: { type: "html", message: "模拟量" },
}
const m8 = {
    shape: "html",
    width: 60,
    height: 60,
    // label: "html",
    html: () => {
        const wrap = document.createElement("div");
        wrap.style.width = "100%";
        wrap.style.height = "100%";
        wrap.innerText = "开关量";
        return wrap;
    },
    data: { type: "html", message: "开关量" },
}
const m9 = {
    shape: "html",
    width: 60,
    height: 60,
    // label: "html",
    html: () => {
        const wrap = document.createElement("div");
        wrap.style.width = "100%";
        wrap.style.height = "100%";
        wrap.innerText = "警告";
        return wrap;
    },
    data: { type: "html", message: "警告" },
}

export default [{
    name: "group1",
    title: "基础组件",
    nodes: [text, val,ref,on_off ,circle,]
}, {
    title: "特殊组件",
    name: "group2",
    nodes: [parent, parentTable, waterHight, image]
}
, {
    title: "3d组件",
    name: "group3",
    nodes: imageNodeArr()
},{
    title: "svg组件",
    name: "group4",
    nodes: svgNodeArr()
}
]
