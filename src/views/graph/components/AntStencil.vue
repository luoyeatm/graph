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

import { Graph, Addon } from "@antv/x6";
const { Stencil } = Addon;
import { NodeFormItem } from "@/typings/graph";
const sliderMarks = {
  0: "0",
  20: "20",
  40: "40",
  60: "60",
  80: "80",
  100: "100",
};
const attrEnum = {
  //标题
  lable: "label/text",
  //字体大小
  fontSize: "label/fontSize",
  //字体颜色
  fontColor: "label/fill",
  //主体颜色
  color: "body/fill",
};
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

      nodeFormText: [
        {
          name: "title",
          label: "标题",
          attr: attrEnum.lable,
          type: "text",
          save: "title",
          val: "saygdysa",
        },
        {
          name: "fontSize",
          label: "字体大小",
          attr: attrEnum.fontSize,
          defult:14,
          type: "number",
        },
        {
          name: "fontColor",
          label: "字体颜色",
          attr: attrEnum.fontColor,
          type: "color",
        },
        {
          name: "color",
          label: "背景颜色",
          attr: attrEnum.color,
          type: "color",
        },
        {
          name: "defultValue",
          label: "默认值",
          type: "number",
          save: "defultValue",
        },
        {
          name: "zIndex",
          label: "显示层级",
          type: "number-slider",
     
          prop: "zIndex",
          marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },
        {
          name: "algorithm",
          label: "算法组件",
          type: "algorithm",
          save: "active",
          algorithm: [
            { name: "symbol", label: "符号", type: "symbol" },
            { name: "value", label: "阈值", type: "number" },
            { name: "color1", label: "颜色true", type: "color" },
            { name: "color2", label: "颜色false", type: "color" },
            {
              name: "zIndex1",
              label: "层级true",
              type: "number-slider",
              marks: sliderMarks,
            },
            {
              name: "zIndex2",
              label: "层级false",
              type: "number-slider",
              marks: sliderMarks,
            },
          ],
        },
      ] as NodeFormItem[],
      nodeFormCircle: [
        {
          name: "title",
          label: "标题",
          attr: attrEnum.lable,
          type: "text",
          save: "title",
          val: "test1",
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
          attr: attrEnum.fontColor,
          type: "color",
        },
        {
          name: "color",
          label: "背景颜色",
          attr: attrEnum.color,
          type: "color",
        },
        {
          name: "zIndex",
          label: "显示层级",
          type: "number-slider",
          prop: "zIndex",
          // save: "defultValue",
          marks: sliderMarks,
        },
        { name: "dataUrl", label: "数据地址", type: "text", save: "dataurl" },
        {
          name: "algorithm",
          label: "算法组件",
          type: "algorithm",
          save: "active",
          algorithm: [
            { name: "symbol", label: "符号", type: "symbol" },
            { name: "value", label: "阈值", type: "number" },
            { name: "color1", label: "颜色true", type: "color" },
            { name: "color2", label: "颜色false", type: "color" },
            {
              name: "zIndex1",
              label: "层级true",
              type: "number-slider",
              marks: sliderMarks,
            },
            {
              name: "zIndex2",
              label: "层级false",
              type: "number-slider",
              marks: sliderMarks,
            },
          ],
        },
      ] as NodeFormItem[],
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
          nodeForm: this.nodeFormText,
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
          nodeForm: this.nodeFormCircle,
        },
      });

      const stencil = new Stencil({
        title: "Components",
        target: graph,
        search(cell, keyword) {
          return cell.shape.indexOf(keyword) !== -1;
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
