<template>
  <div>
    <a-button @click="fullScreen">全屏</a-button>
    <a-button @click="run">运行</a-button>
    <a-button @click="stop">停止</a-button>

    <!-- 节点编辑组件-->
    <div id="refScreen">
      <div className="graph" id="myGraph" ref="refContainer"></div>
    </div>
  </div>
</template>

<script lang="ts">
/** vue 2.0 语法  有时间再改3.0*/
import { Graph, Shape } from "@antv/x6";
import {
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  onBeforeUnmount,
} from "vue";
import { GraphType, NodeFormItem, NodeType } from "@/typings/graph";
import { useStore } from "vuex";
import { key } from "@/store";
import { attrEnum, nodeTemplateMap } from "../stencil/template";

export default {
  setup(props, context) {
    const store = useStore(key);
    const graph: { ant: Graph; data: GraphType } = reactive({
      ant: null,
      data: store.getters.graph,
    });
    const isRun = ref(false);
    const isDev = ref(false);
    let timer = null;
    const initFinsh = ref(false);
    const refContainer = ref(null);
    const refScreen = ref(null);

    const { proxy } = getCurrentInstance();
    const api = proxy.$api;

    const initGraph = () => {
      if (initFinsh.value) {
        return;
      }
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
        image: "/background.jpg",
        position: "center",
        size: "100% auto",
      });
      initFinsh.value = true;
      console.log(graph.ant);
    };
    const fullScreen = () => {
      let mySrceen = document.getElementById("refScreen");
      let graphDiv = document.getElementById("myGraph");
      mySrceen.requestFullscreen().then(
        (status) => {
          // 正常打开全屏不需要任何操作
          const graphX = graph.data.width as any;
          const graphY = graph.data.height as any;
          const winX = mySrceen.clientWidth as number;
          const winY = mySrceen.clientHeight as number;
          // window.
          const scaleX = winX / graphX;
          const scaleY = winY / graphY;

          const lateX = (winX - graphX) / 2;
          const lateY = (winY - graphY) / 2;

          graphDiv.style.width = graphX + "px";
          graphDiv.style.height = graphY + "px";

          graphDiv.style.transform =
            "translate(" +
            lateX +
            "px," +
            lateY +
            "px) " +
            " scale(" +
            scaleX +
            "," +
            scaleY +
            ") ";

          console.log("正常打开全屏");
          // do something
        },
        (err) => {
          console.log("不正常打开全屏");
          // do something
        }
      );
    };

    const stop = () => {
      clearInterval(timer);
    };
    //曹妃甸专用统一样式加载
    const load = () => {
      api.graph.graph.readJson({ id: graph.data.graphId }).then((json: any) => {
        console.log(json);
        graph.ant.fromJSON(json);

        graph.ant.getNodes().map((node) => {
          if (node.shape === "html") {
            const view = graph.ant.findView(node);
            const contentElem = view.findOne(
              "foreignObject > body > div"
            ) as HTMLElement;
            if (contentElem.childElementCount === 0) {
              contentElem.append(getWrap(""));
            }
            node.setAttrByPath(attrEnum.fontSize, "10");
            const position = node.getPosition();
            node.setSize({ width: 10, height: 10 });
            node.data.message === "警告"
              ? node.setAttrByPath(attrEnum.color, "#ff0000")
              : node.setAttrByPath(attrEnum.color, "#00ff00");
          }
        });
      });
    };
    const getWrap = (i: string) => {
      const wrap = document.createElement("div");
      wrap.style.width = "100%";
      wrap.style.height = "100%";
      // wrap.style.backgroundColor = "#ffffff33";
      // wrap.style.display = "flex";
      // wrap.style.alignItems = "center";
      // wrap.style.justifyContent = "center";
      wrap.style.borderRadius = "100%";
      wrap.innerText = i;
      return wrap;
    };

    const run = () => {
      if (!isRun.value) {
        timer = setInterval(() => {
          api.graph.node.lists(graph.data).then((nodes: any) => {
            nodes.map((node: NodeType) => {
              let currentNode = (graph.ant as Graph).getCellById(node.nodeId);

              if (currentNode) {
                if (currentNode.data.message === "模拟量") {
                  currentNode.setAttrByPath(attrEnum.lable, node.data);
                }else {
                  currentNode.setAttrByPath(attrEnum.lable, "");
                }
                

                //算法组件
                if (node.active) {
                  let type = currentNode.data.type;
                  if (type) {
                    let template = nodeTemplateMap[type] as NodeFormItem[];
                    if (template) {
                      let algorithms = template.filter((item) => {
                        return item.type === "algorithm";
                      });
                      algorithms.map((item) => {
                        item.algorithm.run(
                          currentNode,
                          graph.ant,
                          node.active,
                          node.data
                        );
                      });
                    }
                  }
                }
              }
            });
          });
        }, 2000);
      }
    };
    onBeforeUnmount(() => {
      stop();
    });

    onMounted(() => {
      initGraph();
      load();
    });
    const index = ref(1);

    return {
      graph,
      initFinsh,
      refContainer,
      refScreen,
      fullScreen,
      run,
      index,
      stop,
    };
  },
};
</script>

<style>
.graph {
  height: 80px;
  width: 120px;
  background: #ffffff;
}
</style>
