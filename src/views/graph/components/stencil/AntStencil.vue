<template>
  <div>
    <a-button type="primary" @click="showDrawer"> Open </a-button>
    <a-drawer
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      title="节点属性"
      placement="right"
    >
      <div className="app-stencil" id="stencil" ref="refStencil" />
    </a-drawer>
  </div>
</template>
<script lang="ts">
/** vue 2.0 语法  有时间再改*/

import { Graph,Dom, Addon } from "@antv/x6";
const { Stencil } = Addon;
import { NodeFormItem } from "@/typings/graph";
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
      const m5 = graph!.createNode({
        label: "opc数值组件",
        width: 120,
        height: 60,
        attrs: {
          body: {
            fill: "none",
            stroke: "none",
          },
        },
        data: {
          type: "text",
        },
      });
      const m6 = graph!.createNode({
        shape: "circle",
        width: 60,
        height: 60,
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
      });
      const m7 = graph!.createNode({
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
        data:{type:"html",message:"模拟量"}
      });
      const m8 = graph!.createNode({
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
        data:{type:"html",message:"开关量"}
      });
      const m9 = graph!.createNode({
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
        data:{type:"html",message:"警告"}
      });

      const stencil = new Stencil({
        title: "Components",
        target: graph,
        search(cell, keyword) {
          return cell.shape.indexOf(keyword) !== -1;
        },
        validateNode(droppingNode, options) {
          return droppingNode.shape === "html"
            ? new Promise<boolean>((resolve) => {
                const { draggingNode, draggingGraph } = options;
                const view = draggingGraph.findView(draggingNode)!;
                const contentElem = view.findOne("foreignObject > body > div>div");
                Dom.addClass(contentElem, "validating ");
                setTimeout(() => {
                  Dom.removeClass(contentElem, "validating");
                  resolve(true);
                }, 3000);
              })
            : true;
        },
        placeholder: "搜索组件",
        notFoundText: "Not Found",
        collapsable: true,
        stencilGraphWidth: 200,
        stencilGraphHeight: 180,
        groups: [
          {
            name: "group1",
            title: "组态标准件",
          },
          {
            name: "group2",
            title: "组态线",
            // collapsable: false,
          },
        ],
      });

      (this.$refs.refStencil as HTMLElement).appendChild(stencil.container);

      stencil.load([m7,m8,m9], "group1");
      stencil.load([m5, m6], "group2");
    },
  },
  mounted() {
    this.visible = this.$props.visibleDrawer;
  },
};
</script>
<style lang="less" scoped>
.app-stencil {
  height: 100px;
  width: 200px;
  border: 1px solid #f0f0f0;
  position: static;
  background-color: aquamarine;
  z-index: 99;
}

</style>
