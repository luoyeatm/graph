<template>
  <!-- <div> -->
  <!-- <a-button type="primary" @click="showDrawer"> Open </a-button> -->
  <!-- <a-drawer
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      title="节点属性"
      placement="right"
    > -->
  <div className="app-stencil" id="stencil" ref="refStencil" />
  <!-- </a-drawer> -->
  <!-- </div> -->
</template>
<script lang="ts">
/** vue 2.0 语法  有时间再改*/
import nodeTemplate from "@/template/nodeModel";
import { Graph, Addon } from "@antv/x6";
import view from "@/template/viewModel";
// import { attrEnum } from './template';
const { Stencil } = Addon;
export default {
  props: {
    //模版组件弹窗外置触发开关
    visibleDrawer: Boolean,
    graph: Graph,
  },
  data() {
    return {
      visible: false,
      initFinsh: false,
    };
  },
  methods: {
    //弹窗变化触发
    afterVisibleChange(val: boolean) {
      console.log("visible", val);
      if (val) {
        if (!this.initFinsh) {
          this.init();
          this.initFinsh = true;
        }
      }
    },
    //弹窗弹出
    showDrawer() {
      this.visible = true;
    },
    //弹窗关闭
    onClose() {
      this.visible = false;
    },
    //初始化模版
    init() {
      const graph = this.graph;
      graph.on("node:added", ({ node }) => {
        if (view[node.data.type]) {
          setTimeout(() => 
          {
            const antView = graph.findView(node);
            console.log(graph);
            console.log(antView);
            const contentElem = antView.findOne(
              "foreignObject > body > div"
            ) as HTMLElement;
            if (contentElem && contentElem.children[0]) {
              contentElem.children[0].remove();
            }
            contentElem.append(view[node.data.type](node));
            console.log(node);
          }
          ,1000);
        }
      });
      const stencil = new Stencil({
        title: "Components",
        target: graph,

        search(cell, keyword) {
          return cell.data.label.indexOf(keyword) !== -1;
        },
        getDropNode(node) {
          // const { width, height } = node.size();
          // 返回一个新的节点作为实际放置到画布上的节点
          let cloneNode = node.clone();

          if (
            node.data.type === "waterHight" ||
            node.data.type === "ref" ||
            node.data.type === "label" ||
            node.data.type === "on-off"
          ) {
            return cloneNode.size(10, 10);
          } else {
            return cloneNode;
          }
        },
        validateNode(droppingNode, options) {
          return droppingNode.data.type === "parent"
            ? new Promise<boolean>((resolve) => {
                const { draggingNode, draggingGraph } = options;
                // if (
                //   draggingNode.data.type === "waterHight" ||
                //   draggingNode.data.type === "label" ||
                //   draggingNode.data.type === "ref"
                // ) {
                //   draggingNode.setSize({ width: 10, height: 10 });
                //   let postion = draggingNode.getPosition();
                //   if (draggingNode.data.type === "waterHight") {
                //   } else {
                //     postion.x = postion.x + 25;
                //   }
                //   postion.y = postion.y + 25;
                //   draggingNode.setPosition(postion);
                // }

                //draggingNode.setAttrByPath(attrEnum.label,draggingNode.data.label);
                resolve(true);
              })
            : true;
        },
        // validateNode(droppingNode, options) {
        //   return droppingNode.shape === "html"
        //     ? new Promise<boolean>((resolve) => {
        //         const { draggingNode, draggingGraph } = options;

        //       })
        //     : true;
        // },
        placeholder: "搜索组件",
        notFoundText: "Not Found",
        collapsable: true,
        stencilGraphWidth: 200,
        stencilGraphHeight: 500,
        groups: nodeTemplate.map((item) => {
          return {
            name: item.name,
            title: item.title,
            graphHeight: (item.nodes.length + 1) * 40,
          };
        }),
      });

      (this.$refs.refStencil as HTMLElement).appendChild(stencil.container);

      nodeTemplate.map((group) => {
        stencil.load(group.nodes, group.name);
      });
    },
  },
  mounted() {
    this.visible = this.$props.visibleDrawer;
    console.log(this.$props.graph);
    this.init();
  },
};
</script>
<style lang="less" scoped>
.app-stencil {
  height: 600px;
  width: 100%;
  border: 1px solid #f0f0f0;
  position: relative;
  background-color: aquamarine;
  z-index: 99;
}
</style>
