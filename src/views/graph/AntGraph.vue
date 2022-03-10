<template>
  <div>
    <a-button @click="fullScreen">全屏</a-button>
    <a-button @click="run">运行</a-button>
    <a-button @click="hideBackground">隐藏背景</a-button>
    <a-button @click="dev">开发模式</a-button>
    <!-- <a-button @click="create">连续创建20个html标准件</a-button>
    <input :v-model="index" /> -->

    <!-- 二级显示界面 -->

    <!-- 节点编辑组件-->
    <ant-node
      v-if="initFinsh && isDev"
      :graph="graph.ant"
      :init="initFinsh"
      :graphDesc="graph.data"
    />
    <div style="float: left; height: 100%; width: 100%">
      <div v-if="isDev" style="width: 20%; height: 600px; float: left">
        <!-- 模版组件 -->
        <ant-stencil
          v-if="initFinsh && isDev"
          :graph="graph.ant"
          :visibleDrawer="stencil"
        />
      </div>
      <div id="refScreen">
        <a-modal
          width="60%"
          :ref="modal"
          v-model:visible="delailVisble"
          :title="detailPage.title"
          :footer="null"
        >
          <detail v-if="delailVisble" :detailPage="detailPage" />
        </a-modal>
        <div
          className="graph"
          id="myGraph"
          ref="refContainer"
          @dblclick="toCenter"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Graph, Shape } from "@antv/x6";
import {
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  inject,
  onBeforeUnmount,
} from "vue";
import AntNode from "./components/node/AntNode.vue";
import { GraphType, NodeFormItem, NodeType } from "@/typings/graph";
import AntStencil from "./components/stencil/AntStencil.vue";
import { useStore } from "vuex";
import { nodeTemplateMap, getView } from "@/template/formModel";
import { attrEnum } from "@/enum/common";
import viewModel from "@/template/viewModel";
import { algorithm } from "@/template/algorithm";
import { key } from "@/store";
import "echarts-liquidfill";
import detail from "./components/detail/index.vue";
export default {
  components: { AntNode, AntStencil, detail },
  setup(props, context) {
    const store = useStore(key);
    const graph: { ant: Graph; data: GraphType } = reactive({
      ant: null,
      data: store.getters.graph,
    });
    const detailPage = reactive({
      title: "详情页面",
      name: "组件名",
      color: "水",
      type: "开关量",
      data: [
        {
          pre: "A",
          // height: "0.22",
          // F: "2323.22mm",
          P: "23kpa",
          T: "34.33",
          L: "3243.32mm",
          state: false,
          image: "r/0124-合成抠图_59.png",
        },
        {
          pre: "B",
          height: "0.22",
          F: "2323.22mm",
          P: "23kpa",
          // T: "34.33",
          L: "3243.32mm",
          state: false,
          image: "y/0124-合成抠图_59.png",
        },
        {
          pre: "C",
          height: "0.22",
          F: "2323.22mm",
          // P: "23kpa",
          T: "34.33",
          L: "3243.32mm",
          state: false,
          image: "b/0124-合成抠图_59.png",
        },
      ],
    });
    const modal = ref(null);
    const isRun = ref(false);
    const isDev = ref(false);
    //const hideBackground
    let timer = null;
    const initFinsh = ref(false);
    const refContainer = ref(null);
    const refScreen = ref(null);
    const stencil = ref(false);
    const { proxy } = getCurrentInstance();
    const api = proxy.$api;
    const offsetX = ref(0);
    const offsetY = ref(0);
    const scaleX = ref(0);
    const scaleY = ref(0);
    const lateX = ref(0);
    const lateY = ref(0);
    const winX = ref(0);
    const winY = ref(0);
    const graphX = ref(0);
    const graphY = ref(0);
    const fontSize = ref(10);

    function showDrawer() {
      stencil.value = true;
    }
    const initGraph = () => {
      if (initFinsh.value) {
        return;
      }
      console.log("初始化");
      graph.ant = new Graph({
        container: refContainer.value,
        width: parseInt(graph.data.width),
        height: parseInt(graph.data.height),
        grid: {
          visible: false,
          size: 2,
        },
        resizing: {
          enabled: () => {
            return isDev.value;
          },
        },
        snapline: {
          enabled: true,
          sharp: true,
          tolerance: 2,
        },
        interacting: {
          nodeMovable: () => {
            return isDev.value;
          },
        },
        selecting: {
          enabled: () => {
            return isDev.value;
          },
          // enabled:true,
          rubberband: true,
          showNodeSelectionBox: true,
        },
        clipboard: {
          enabled: true,
        },
        embedding: {
          enabled: true,
          findParent({ node }) {
            const bbox = node.getBBox();
            return this.getNodes().filter((_node) => {
              // 只有 data.parent 为 true 的节点才是父节点
              const data = _node.getData<any>();
              if (data && data.parent && node.data.type != _node.data.type||_node.data.type=="parent") {
                const targetBBox = _node.getBBox();
                return bbox.isIntersectWithRect(targetBBox);
              }
              return false;
            });
          },
        },

        connecting: {
          router: "manhattan",
          createEdge() {
            return new Shape.Edge({
              shape: "custom-edge",
            });
          },
        },
      });
      Graph.unregisterEdge("custom-edge");
      //Graph.R
      Graph.registerEdge(
        "custom-edge",
        {
          inherit: "edge",
          attrs: {
            line: {
              stroke: "#5755a1",
            },
          },
          defaultLabel: {
            markup: [
              {
                tagName: "rect",
                selector: "body",
              },
              {
                tagName: "text",
                selector: "label",
              },
            ],
            attrs: {
              label: {
                fill: "black",
                fontSize: 14,
                textAnchor: "middle",
                textVerticalAnchor: "middle",
                pointerEvents: "none",
              },
              body: {
                ref: "label",
                fill: "white",
                stroke: "#5755a1",
                strokeWidth: 2,
                rx: 4,
                ry: 4,
                refWidth: "140%",
                refHeight: "140%",
                refX: "-20%",
                refY: "-20%",
              },
            },
            position: {
              distance: 100,
              options: {
                absoluteDistance: true,
                reverseDistance: true,
              },
            },
          },
        },
        true
      );
      // #region 初始化连接桩参数
      const ports = {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: {
                  visibility: "hidden",
                },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: {
                  visibility: "hidden",
                },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: {
                  visibility: "hidden",
                },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: {
                  visibility: "hidden",
                },
              },
            },
          },
        },
        items: [
          {
            group: "top",
          },
          {
            group: "right",
          },
          {
            group: "bottom",
          },
          {
            group: "left",
          },
        ],
      };

      Graph.registerNode(
        "custom-image",
        {
          inherit: "rect",
          width: 52,
          height: 52,
          zIndex: 100,
          markup: [
            {
              tagName: "image",
            },
          ],
          attrs: {
            image: {
              width: 52,
              height: 52,
            },
          },
          ports: { ...ports },
        },
        true
      );

      Graph.registerNode(
        "custom-text",
        {
          inherit: "rect",
          width: 26,
          height: 26,
          zIndex: 100,
          markup: [
            {
              tagName: "text",
              selector: "label",
            },
          ],
          attrs: {
            label: {
              textAnchor: "left",
              textVerticalAnchor: "top",
              fontSize: 18,
              fill: "yellow",
            },
          },
        },
        true
      );
      graph.ant.drawBackground({
        color: "#4A4A4A",
        image: "/background.png",
        position: "center",
        size: "100% auto",
      });
      initFinsh.value = true;
      console.log("页面挂载完成");
    };
    const reSize = (mySrceen, graphDiv) => {
      // 正常打开全屏不需要任何操作
      graphX.value = Number.parseInt(graph.data.width);
      graphY.value = Number.parseInt(graph.data.height);
      winX.value = mySrceen.clientWidth as number;
      winY.value = mySrceen.clientHeight as number;

      // window.
      scaleX.value = winX.value / graphX.value;
      scaleY.value = winY.value / graphY.value;

      lateX.value = (winX.value - graphX.value) / 2;
      lateY.value = (winY.value - graphY.value) / 2;

      graphDiv.style.width = graphX + "px";
      graphDiv.style.height = graphY + "px";
      mySrceen.style.width = winX.value + "px";
      mySrceen.style.height = winY.value + "px";
      graphDiv.style.transform =
        "translate(" +
        lateX.value +
        "px," +
        lateY.value +
        "px) " +
        " scale(" +
        scaleX.value +
        "," +
        scaleY.value +
        ") ";

      console.log("正常打开全屏");
      // do something
    };
    const hideBackground = () => {
      graph.ant.clearBackground();
    };
    //自适应
    const autoSize = () => {
      let mySrceen = document.getElementById("refScreen");
      let parent = mySrceen.parentElement;
      let graphDiv = document.getElementById("myGraph");

      mySrceen.style.overflow = "auto";
      graphDiv.style.position = "relative";
      graphDiv.style.display = "inline-block";
    };
    const fullScreen = () => {
      let mySrceen = document.getElementById("refScreen");
      let modals =
        document.getElementsByClassName("ant-modal-root")[0].parentElement;

      mySrceen.append(modals);
      mySrceen.style.overflow = "hidden";
      let graphDiv = document.getElementById("myGraph");
      mySrceen.requestFullscreen().then(
        // let mySrceen = document.getElementById("refScreen");
        // let graphDiv = document.getElementById("myGraph");
        //    let mySrceen = document.getElementById("refScreen");
        (status) => {
          reSize(mySrceen, graphDiv);
        },
        (err) => {
          console.log("不正常打开全屏");
          // do something
        }
      );
    };
    const dev = () => {
      isDev.value = true;
      let currentGraph = graph.ant as Graph;
      // currentGraph.enablePanning(); //开启拖动
      currentGraph.enableSelection(); //开启点选
      stop();
      load();
      // currentGraph.enable
    };
    const toCenter = (e) => {
      if (scaleX.value == 0) {
        return;
      }
      let graphDiv = document.getElementById("myGraph");
      let mySrceen = document.getElementById("refScreen");
      if (offsetX.value === 0 && offsetY.value === 0) {
        const size = 4;
        //mySrceen.style.zoom = "200%"
        offsetX.value = e.x;
        offsetY.value = e.y;
        graphDiv.style.transform =
          "translate(" +
          (lateX.value + (winX.value / 2 - offsetX.value) * (size - 1)) +
          // 0+
          "px," +
          (lateY.value + (winY.value / 2 - offsetY.value) * (size - 1)) +
          //  0+
          "px) " +
          " scale(" +
          scaleX.value * size +
          "," +
          scaleY.value * size +
          ") ";
      } else {
        // //还原
        offsetX.value = 0;
        offsetY.value = 0;
        graphDiv.style.transform =
          "translate(" +
          lateX.value +
          "px," +
          lateY.value +
          "px) " +
          " scale(" +
          scaleX.value +
          "," +
          scaleY.value +
          ") ";
      }
    };
    const undev = () => {
      isDev.value = false;
      let currentGraph = graph.ant as Graph;
      currentGraph.disablePanning(); //关闭拖动
      currentGraph.disableSelection(); //关闭点选
      // currentGraph.
    };
    const stop = () => {
      clearInterval(timer);
    };
    //曹妃甸专用统一样式加载
    const load = () => {
      api.graph.graph.readJson({ id: graph.data.graphId }).then((json: any) => {
        console.log("节点挂载");
        graph.ant.fromJSON(json);

        graph.ant.getNodes().map((node) => {
          // console.log(node)
          // if (node.getAttrByPath("text/text")== "185") {
          //   node.setAttrByPath(attrEnum.fontSize, 30);
          //   node.setAttrByPath(attrEnum.backgroundColor, "#00ff00");
          //   console.log(node.getPosition());
          // }

          if (node.shape === "html") {
            const view = graph.ant.findView(node);
            const contentElem = view.findOne(
              "foreignObject > body > div"
            ) as HTMLElement;
            if (contentElem.childElementCount !== 0) {
              contentElem.childNodes.forEach((item) => {
                item.remove();
              });
            }
            if (viewModel[node.data.type]) {
              contentElem.append(viewModel[node.data.type](node));
            } else {
              contentElem.append(getWrap(""));
            }
            node.setAttrByPath(attrEnum.fontSize, fontSize.value);
            if (node.data.message) {
              const size = node.getSize();
              if (size.width > 20) {
                const position = node.getPosition();
                position.x += (size.width - 10) / 2;
                position.y += (size.height - 10) / 2;
                node.setPosition(position);
                node.setSize(10, 10);
                node.setAttrByPath(attrEnum.color, "#50E3C2");
              }
              if (node.data.message == "模拟量") {
                node.setAttrByPath(attrEnum.color, "#50E3C2");
              } else {
                node.setAttrByPath(attrEnum.color, "#ff0000");
              }
            }
          }
        });
      });
    };
    const getWrap = (i: string) => {
      const wrap = document.createElement("div");
      wrap.style.width = "100%";
      wrap.style.height = "100%";
      // wrap.style.backgroundColor = "#ffffff33";
      wrap.style.display = "flex";
      wrap.style.alignItems = "center";
      wrap.style.justifyContent = "center";
      wrap.style.borderRadius = "100%";
      // wrap.style.fontSize = "0.2em";
      wrap.innerText = i;
      return wrap;
    };
    const getNum = (num: string): string => {
      if (num && num.length > 3) {
        if (num.indexOf(".") > -1) {
          var result = num.substring(0, num.indexOf(".") + 3);
          return result;
        }
      }
      // else {
      //   num = "0";
      // }
      return num;
    };
    const run = () => {
      undev();

      if (!isRun.value) {
        isRun.value = true;
        const antNodes = graph.ant.getNodes();
        const parent = antNodes.filter((node) => {
          return node.data.type === "parent";
        });
        const on_off = antNodes.filter((item) => item.data.type == "on_off");
        parent.map((item) => {
          if (!item.data.show || item.data.show == "false") {
            item.hide();
            let children = item.getChildren();
            if (children) {
              children.map((item) => item.hide());
            }
          }
        });

        graph.ant.on("node:click", ({ node }) => {
          let children = node.getChildren();
          let color = "水";
          if (node.data.color) {
            color = node.data.color;
            detailPage.color = color;
          }
          if (node.data.type === "waterHight") {
            detailPage.type = "模拟量";
            detailPage.color = node.data.color;

            if (children) {
              children.map((item) => {
                if (item.data.type === "parent") {
                  const data = [];
                  let title = item.data.title;
                  detailPage.name = title;
                  // item.show();
                  item.setZIndex(998);
                  // node.hide();
                  const children = item.getChildren();
                  if (children) {
                    item.getChildren().map((item) => {
                      if (item.data.message === "模拟量") {
                        if (item.data.pre) {
                          let pre = item.data.pre as string;
                          let name = "";
                          if (pre.length > 2) {
                            name = pre.substring(pre.length - 1, pre.length);
                          } else {
                            //name = "A";
                          }

                          const index = data.findIndex((dataItem) => {
                            return dataItem.pre === name;
                          });
                          let type = "";
                          let height = 0;

                          if (pre.search("液位") > -1) {
                            type = "L";
                            height =
                              (item.getAttrByPath(attrEnum.label) as number) /
                              (item.data.max as number);
                          } else if (pre.search("温度") > -1) {
                            type = "T";
                          } else if (pre.search("压力") > -1) {
                            type = "P";
                          } else if (pre.search("流量") > -1) {
                            type = "F";
                          }

                          if (index > -1) {
                            data[index][type] = item.getAttrByPath(
                              attrEnum.label
                            );
                            if (height !== 0) {
                              data[index].height = height;
                            }
                          } else {
                            let obj = { pre: name };
                            obj[type] = item.getAttrByPath(attrEnum.label);

                            obj.height = height;
                            data.push(obj);
                          }
                        }
                      } else if (item.data.type === "label") {
                        //  detailPage.name = item.getAttrByPath(attrEnum.label);
                      }
                    });

                    detailPage.data = data;
                    delailVisble.value = true;
                  }
                }
              });
            }
          } else if (node.data.type === "image") {
            let closeImg = node.data.close as string;
            let openImg = node.data.open as string;

            detailPage.type = "开关量";
            if (children) {
              children.map((item) => {
                if (item.data.type === "parent") {
                  const data = [];
                  let title = item.data.title;
                  detailPage.name = title;
                  // item.show();
                  item.setZIndex(998);
                  // node.hide();
                  const children = item.getChildren();
                  if (children) {
                    item.getChildren().map((item) => {
                      if (item.data.message === "开关量") {
                        let name = item.data.pre as string;
                        // const index = data.findIndex((dataItem) => {
                        //   return dataItem.pre === name;
                        // });
                        let obj = { pre: name };

                        obj["state"] = item.data.state;
                        if (item.data.state) {
                          obj["image"] = openImg;
                        } else {
                          obj["image"] = closeImg;
                        }

                        data.push(obj);
                      } else if (item.data.type === "label") {
                        detailPage.name = item.getAttrByPath(attrEnum.label);
                      }
                    });
                  }
                  detailPage.data = data;
                  delailVisble.value = true;
                }
              });
            }
          }else if(node.data.type ==="label"&& node.data.refId){
            let parent = graph.ant.getCellById(node.data.refId)
              parent.show();
              parent.children.map((item)=>{
                item.show()
              })
          }
        });
        graph.ant.on("node:mouseleave", ({ node }) => {
          if(node.data.type ==="label"&& node.data.refId){
            let parent = graph.ant.getCellById(node.data.refId)
              parent.hide();
               parent.children.map((item)=>{
                item.hide()
              })
          }
        });
        timer = setInterval(() => {
          api.graph.node.lists(graph.data).then((nodeMap: any) => {
            console.log(on_off);
            graph.ant.getNodes().map((item) => {
              algorithm.run(item, nodeMap, graph.ant);
              if (item.shape && item.shape === "html") {
                if (viewModel[item.data.type]) {
                  viewModel[item.data.type](item);
                }
              }
              if (item.data.type == "html" && item.data.message) {
                let node = nodeMap[item.data.num] as NodeType;
                console.log(item.data.num);
                console.log(node);
                let data = parseFloat(node.data);
                if (item.data.message === "模拟量") {
                  if (!item.hasParent()) {
                    let after = item.data.after;
                    if (after == "Mpa") {
                      after = "kpa";
                      data *= 1000;
                    }
                    let value = getNum(data.toString());
                    item.setAttrByPath(attrEnum.label, value + after);
                  } else {
                    item.setAttrByPath(attrEnum.label, getNum(node.data));
                  }
                  item.setAttrByPath(attrEnum.fontSize, fontSize.value);
                } else if (item.data.message === "开关量") {
                  if (item.data.history && item.data.history == node.data) {
                  } else {
                    item.setAttrByPath(attrEnum.label, node.data);
                  }
                  item.setAttrByPath(attrEnum.fontSize, fontSize.value);
                } else if (item.data.message) {
                  item.setAttrByPath(attrEnum.label, "");
                }
              }
            });
            {
              // nodes.map((node: NodeType) => {
              //   let currentNode = (graph.ant as Graph).getCellById(node.nodeId);
              //   if (currentNode) {
              //     if (currentNode.data.message === "模拟量") {
              //       if (!currentNode.hasParent()) {
              //         let data = parseFloat(node.data);
              //         let after = currentNode.data.after;
              //         if (after == "Mpa") {
              //           after = "kpa";
              //           data *= 1000;
              //         }
              //         let value = getNum(data.toString());
              //         currentNode.setAttrByPath(attrEnum.label, value + after);
              //       } else {
              //         currentNode.setAttrByPath(
              //           attrEnum.label,
              //           getNum(node.data)
              //         );
              //       }
              //       currentNode.setAttrByPath(attrEnum.fontSize, fontSize.value);
              //     } else if (currentNode.data.message === "开关量") {
              //       if (
              //         currentNode.data.history &&
              //         currentNode.data.history == node.data
              //       ) {
              //       } else {
              //         currentNode.setAttrByPath(attrEnum.label, node.data);
              //       }
              //       currentNode.setAttrByPath(attrEnum.fontSize, fontSize.value);
              //     } else if (currentNode.data.message) {
              //       currentNode.setAttrByPath(attrEnum.label, "");
              //     }
              //     if (node.active) {
              //       let type = currentNode.data.type;
              //       if (type) {
              //         let template = nodeTemplateMap[type] as NodeFormItem[];
              //         if (template) {
              //           let algorithms = template.filter((item) => {
              //             return item.type === "algorithm";
              //           });
              //           algorithms.map((item) => {
              //             item.algorithm.run(
              //               currentNode,
              //               graph.ant,
              //               node.active,
              //               node.data
              //             );
              //           });
              //           algorithms = null;
              //           template = null;
              //         }
              //       }
              //     }
              //   }
              // });
              //释放内存 //关键
            }
          });
        }, 5000);
      }
    };
    const delailVisble = ref(true);
    onBeforeUnmount(() => {
      stop();
    });

    onMounted(() => {
      initGraph();
      load();
      autoSize();
    });
    const index = ref(1);

    return {
      graph,
      initFinsh,
      stencil,
      showDrawer,
      refContainer,
      refScreen,
      fullScreen,
      run,
      isDev,
      dev,
      hideBackground,
      modal,
      index,
      toCenter,
      fontSize,
      delailVisble,
      detailPage,
    };
  },
};
</script>

<style lang="less">
.graph {
  height: 80px;
  width: 120px;

  margin: 0;
  padding: 0;
}

#refScreen {
  width: 80%;
  height: 600px;
  margin: 0;
  padding: 0;
  float: left;
  background: #ffffff;
  // position: relative;
}
.modal {
  background: #000000;
}
// @text-color: #000000
</style>
