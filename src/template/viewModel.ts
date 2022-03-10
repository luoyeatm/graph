import 'echarts-liquidfill'
import * as echarts from 'echarts'
import { Node } from "@antv/x6"

//html主体
const content = () => {
    const wrap = document.createElement("div");
    wrap.style.width = "100%";
    wrap.style.height = "100%";
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.justifyContent = "center";
    return wrap
}

export const ercharMap = {

}
export const htmlMap = {

}
const getContentByNode = (node?: Node,) => {
    let contentCup
    if (node) {
        if (htmlMap[node.id]) {
            contentCup = htmlMap[node.id]
        } else {
            contentCup = content()
            htmlMap[node.id] = contentCup
        }
    } else { contentCup = content() }
    return contentCup
}
const initDataShow = (node?: Node,) => {
    const content = getContentByNode(node)

}
const initParent = (node?: Node) => {
    let content = getContentByNode(node) as HTMLElement
    let borderColor = "#ffa940"
}
const image = (node?: Node) => {
    let image = "y/0117_03.png"
    let rotate = "0"
    if (typeof node === "string") {
        image = node

        console.log(node)
        node = null
    }
    let content = getContentByNode(node) as HTMLElement
    if (node && node.data) {
        if (node.data.state) {
            image = node.data.open
        } else {
            image = node.data.close
        }
        if (node.data.rotate) {
            rotate = node.data.rotate
        }
        console.log(node.data.open)
        console.log(node.data.close)
    }
    if (image && image != "none") {
        content.style.backgroundImage = "url('image/" + image + "')"
    } else {
        content.style.backgroundImage = "none"
    }
    // content.style.backgroundColor  = "#000000"
    // content.style.backgroundImage  = "url('image/"+image+"')"

    content.style.transform = "rotate(" + rotate + "deg)";
    // content.style.transform = "rotate(100deg)";
    content.style.backgroundSize = "100% 100%"
    return content
}
const svg = (node?: Node) => {
    let image = "none"
    if (typeof node === "string") {
        image = node

        console.log(node)
        node = null
    }
    let content = getContentByNode(node) as HTMLElement
    let embed: HTMLObjectElement
    if (content.childNodes.length > 0) {
        console.log(content.childNodes)
        embed = content.childNodes[0] as HTMLObjectElement
    } else {
        console.log(222222)
        embed = document.createElement("object") as HTMLObjectElement
        content.append(embed)
    }
    let rotate = 0 
    let scaleX = 1
    let scaleY = 1
    if (node && node.data) {
        if (node.data.image) {
            image = node.data.image
        }
    

        if (node.data.rotate) {
            rotate = node.data.rotate
        }
        if (node.data.scaleX) {
            scaleX = node.data.scaleX
        }
        if (node.data.scaleY) {
            scaleY = node.data.scaleY
        }

    }
    if (image && image != "none") {
        embed.data = "image/svg/" + image
        console.log(embed.data)
    } else {
        embed.data = ""
    }
    embed.style.pointerEvents = "none";
    // content.style.backgroundColor  = "#000000"
    // content.style.backgroundImage  = "url('image/"+image+"')"
    content.style.backgroundSize = "100% 100%"
    // content.style.background = "#000000"
    embed.style.width = "100%"
    embed.style.height = "100%"

    embed.style.transform ="scaleX("+scaleX+") scaleY("+scaleY+") rotate(" + rotate+"deg)"

    // embed.style.background = "#000000"
    return content
}
//液位球Y
const waterHight = (node?: Node,) => {
    let myChart
    let size = 1
    let data = 0
    let width = 60
    let height = 60
    let color = '水'
    let el: HTMLElement
    //弧度
    let hudu = "5%"
    //倾斜
    let qingxie = "0"
    let amplitude = "10"
    if (node) {
        if (node.data.data) {
            data = node.data.data
        }
        if (node.data.size) {
            size = node.data.size
        }
        if (node.data.width) {
            width = node.data.width
        }
        if (node.data.height) {
            height = node.data.height
        }
        if (node.data.color) {
            color = node.data.color
        }
        if (node.data.amplitude) {
            amplitude = node.data.amplitude
        }

        if (node.data.hudu) {
            hudu = node.data.hudu
        }
        if (node.data.qingxie) {
            qingxie = node.data.qingxie
        }
        if (!ercharMap[node.id]) {

            //节点未绑定erchart ,进行绑定
            el = content()


            myChart = echarts.init(el)
            ercharMap[node.id] = { chart: myChart, el: el }

        } else {
            myChart = ercharMap[node.id].chart
            el = ercharMap[node.id].el
        }

    } else {
        //开发模式下，节点还为生成，无法绑定，直接init ,用于模版栏的显示
        el = content()
        myChart = echarts.init(el)
    }
    //需要获取到element,所以是onMounted的Hook
    // 绘制图表
    // myChart.clear();
    let color1 = "#000000"
    let color2 = "#990000"
    if (color === '水') {
        color1 = "#1D2166"
        color2 = '#47f5f9'
    }if(color === "混合"){
        data = 0.8
    }
    let object = {
        tooltip: {
            show: false,
        },
        series: [
            {
                // name: "液位",
                type: "liquidFill",
                // radius: (20 * size) + "px",
                radius: (20 * size) + "px",
                data: [data],
                // shape: 'roundRect',
                amplitude:amplitude,
                shape: 'container',
                center: ['50%', '50%'],
                label: false
                // {
                //     // normal: {
                //     //     color: "#27e5f1",
                //     //     insideColor: "#ffffff00",
                //     //     textStyle: {
                //     //         fontSize: 4 * size,
                //     //         fontWeight: "bold",
                //     //     },
                //     // },
                // }
                ,
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 1, //渐变
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 1,
                                // color: ["#fa7ffb"], // 0% 处的颜色

                                color: [color1], // 0% 处的颜色

                                // color: ["#000000"], // 0% 处的颜色
                            },
                            {
                                offset: 0,
                                // color: ["#990000"], // 100% 处的颜色
                                color: [color2], // 100% 处的颜色
                                // color: ["#1D2166"], // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                ],
                outline: {
                    show: true,
                    borderDistance: 0.5 * size,
                    itemStyle: {
                        borderColor: "#44e5f900",
                        borderWidth: 0.5 * size,
                    },
                },
                backgroundStyle: {
                    color: "#00000000"
                }
            },
        ],
    }
    let two = {
        // name: "液位",
        type: "liquidFill",
        // radius: (20 * size) + "px",
        radius: (20 * size) + "px",
        data: [data - 0.2],
        amplitude: parseInt(amplitude)/3,
        // waveAnimation: 0
        // shape: 'roundRect',
        shape: 'container',
        center: ['50%', '50%'],
        label: false
        // {
        //     // normal: {
        //     //     color: "#27e5f1",
        //     //     insideColor: "#ffffff00",
        //     //     textStyle: {
        //     //         fontSize: 4 * size,
        //     //         fontWeight: "bold",
        //     //     },
        //     // },
        // }
        ,
        color: [
            {
                type: "linear",
                x: 0,
                y: 1, //渐变
                x2: 0,
                y2: 0,
                colorStops: [
                    {
                        offset: 1,
                        // color: ["#fa7ffb"], // 0% 处的颜色

                        color: ["#1D2166"], // 0% 处的颜色

                        // color: ["#000000"], // 0% 处的颜色
                    },
                    {
                        offset: 0,
                        // color: ["#990000"], // 100% 处的颜色
                        color: ['#47f5f9'], // 100% 处的颜色
                        // color: ["#1D2166"], // 100% 处的颜色
                    },
                ],
                global: false, // 缺省为 false
            },
        ],
        outline: {
            show: true,
            borderDistance: 0.5 * size,
            itemStyle: {
                borderColor: "#44e5f900",
                borderWidth: 0.5 * size,
            },
        },
        backgroundStyle: {
            color: "#00000000"
        }
    }
    if (color === "混合") {
        object.series.push(two)
    }


    myChart.setOption(object
        , true);

    if (el.firstChild) {
        console.log(el.firstChild.firstChild)

        el.firstChild.firstChild.style.borderRadius = hudu
        el.firstChild.firstChild.style.transform = "skew(" + qingxie + "deg)"
        el.firstChild.firstChild.style.width = width + "px"
        el.firstChild.firstChild.style.height = height + "px"
    }
    return el
};
const detailWaterHight = (data, type?: string) => {
    let myChart
    let size = 1

    let color = '水'
    if (type) {
        color = type
    }
    let el: HTMLElement
    //弧度
    let hudu = "5%"
    //倾斜
    let qingxie = "0"
    //二级页面模式
    el = content()
    myChart = echarts.init(el)
    //需要获取到element,所以是onMounted的Hook
    // 绘制图表
    // myChart.clear();
    let color1 = "#000000"
    let color2 = "#990000"
    if (color === '水') {
        color1 = "#1D2166"
        color2 = '#47f5f9'
    }
    console.log(data)
    myChart.setOption({
        tooltip: {
            show: false,
        },
        series: [
            {
                // name: "液位",
                type: "liquidFill",
                // radius: (20 * size) + "px",
                radius: (20 * size) + "px",
                data: [data],
                // shape: 'roundRect',
                shape: 'container',
                center: ['50%', '50%'],
                label:
                {
                    normal: {
                        color: "#27e5f1",
                        insideColor: "#ffffff00",
                        textStyle: {
                            fontSize: 20,
                            fontWeight: "bold",
                        },
                    },
                },
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 1, //渐变
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 1,
                                // color: ["#fa7ffb"], // 0% 处的颜色

                                color: [color1], // 0% 处的颜色

                                // color: ["#000000"], // 0% 处的颜色

                            },
                            {
                                offset: 0,
                                // color: ["#990000"], // 100% 处的颜色
                                color: [color2], // 100% 处的颜色
                                // color: ["#1D2166"], // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                ],
                outline: {
                    show: true,
                    borderDistance: 0.5 * size,
                    itemStyle: {
                        borderColor: "#44e5f900",
                        borderWidth: 0.5 * size,
                    },
                },
                backgroundStyle: {
                    color: "#00000000"
                }
            },
        ],
    }, true);

    if (el.firstChild) {
        console.log(el.firstChild.firstChild)

        // el.firstChild.firstChild.style.borderRadius = hudu
        // el.firstChild.firstChild.style.transform="skew("+qingxie+"deg)"
        //el.firstChild.firstChild.style.width = el.parentElement.style.width +  "px"
        //el.firstChild.firstChild.style.height = el.parentElement.style.height + "px"
    }
    return el
};


const onClickShowBox = () => { }
//table
const parentTable = (node?: Node) => {
    let content = getContentByNode(node) as HTMLElement
    let col = 2
    let row = 3
    let borderColor = "#ffa940"
    if (node) {
        if (node.data.col)
            col = node.data.col
        if (node.data.row)
            row = node.data.row
        if (node.data.borderColor)
            borderColor = node.data.borderColor
    }
    let tableWarp
    if (content.hasChildNodes()) {
        tableWarp = content.firstChild
        // console.log(con)
        let trs = tableWarp.childNodes
        trs.forEach((item) => {
            console.log(item)
            item.childNodes.forEach(element => {
                element.style.border = "1px solid " + borderColor;
            });
        })
    } else {
        tableWarp = document.createElement("table");
        tableWarp.style.width = "100%";
        tableWarp.style.height = "100%";
        content.append(tableWarp);
        for (let i = 0; i < row; i++) {
            const trWarp = document.createElement("tr");
            tableWarp.append(trWarp);
            for (let j = 0; j < col; j++) {
                const tdWarp = document.createElement("td");
                tdWarp.style.border = "1px solid " + borderColor;
                trWarp.append(tdWarp);
            }
        }
    }
    tableWarp.style.border = "1px solid " + borderColor;
    return content
};

// const initWaterHight = (el?:Element,node?: Node) => {
//     if(!el){
//         el = content()
//     }

//     waterHight(el,  node)
//     return el
// };

// export const createAndUpdateWiterHight=(node:Node,elem?:Element):HTMLElement=>{
//     const nodeForm = getFormByNode(node)

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
//     view.load()
//     return eval(initMethod) as HTMLElement
// }

//模版视图
export default {
    waterHight,
    content,
    parentTable,
    detailWaterHight,
    image,
    svg
    // initParent: initParent,
    // load: () => { }
}

