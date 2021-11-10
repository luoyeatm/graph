<template>
  <div>
    <div className="graph" ref="refContainer"></div>
    <!-- 模版组件 -->
    <ant-stencil v-if="initFinsh" :graph="graph.ant" :visibleDrawer="stencil" />

    <!-- 节点编辑组件-->
    <ant-node
      v-if="initFinsh"
      :graph="graph.ant"
      :init="initFinsh"
      :graphDesc="graphData"
    />
  </div>
</template>

<script lang="ts">
/** vue 2.0 语法  有时间再改3.0*/
import { Graph, Shape } from "@antv/x6";
import { getCurrentInstance, onMounted, reactive, ref, computed } from "vue";
import AntNode from "./components/node/AntNode.vue";
import { GraphType } from "@/typings/graph";
import AntStencil from "./components/AntStencil.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default {
  components: { AntNode, AntStencil },
  setup(props, context) {
    const store = useStore(key);
    const graph = reactive({ ant: null, data: store.getters.graph });

    const initFinsh = ref(false);
    const refContainer = ref(null);
    const stencil = ref(false);
    const graphData = store.getters.graph;
    onMounted(() => {
      initGraph();
      const { proxy } = getCurrentInstance();
      const api = proxy.$api;
      api.graph.graph
        .readJson({ id: graphData.graphId })
        .then((json: any) => {
          console.log(json);
          graph.ant.fromJSON(json);
        });
    });
    function showDrawer() {
      stencil.value = true;
    }
    const initGraph = () => {
      if (initFinsh.value) {
        return;
      }
      console.log("执行了");
      graph.ant = new Graph({
        container: refContainer.value ,
        width: 800,
        height: 600,
        grid: false,
        resizing: true,
        snapline: {
          enabled: true,
          sharp: true,
        },
        selecting: {
          enabled: true,
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
      initFinsh.value = true;
      console.log(graph.ant);
    };
    return { graphData, graph, initFinsh, stencil, showDrawer, refContainer };
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
