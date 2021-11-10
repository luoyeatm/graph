<template>
  <div>
    <node-form-defult
      v-if="initFinsh"
      :currentNode="currentNode.node"
      :nodeForm="nodeForm"
      v-model:visible="visibleDrawer"
      v-model:nodeData="nodes[currentIndex]"
    />
  </div>
</template>

<script lang="ts">
/**vue 3.0 语法 */

import { Graph, Node } from "@antv/x6";
import NodeFormDefult from "./NodeFormDefult.vue";
import { NodeType, GraphType } from "@/typings/graph";
import { ref, reactive, computed, onMounted } from "vue";
export default {
  components: { NodeFormDefult },
  props: {
    graph: Graph,
    graphDesc: Object,
    init: Boolean,
  },
  setup(props, context) {
    //node节点属性缓存
    const nodes: NodeType[] = reactive([]);
    //显示隐藏
    const visibleDrawer = ref(false);
    //当前节点
    const currentNode = reactive({ node: {} });
    //当前业务数据下标
    const currentIndex = ref(-1);
    //数据加载完毕
    const initFinsh = ref(false);
    //当前表单结构数据
    const nodeForm = computed(() => {
      let node = currentNode.node as Node;
      if (node.getData) {
        return node?.getData().nodeForm;
      } else {
        return [];
      }
    });

    /*Node---缓存查询 */
    const findById = (id: string) => {
      const index = nodes.findIndex((val) => val!.nodeId === id);
      return index;
    };
    /*Node---缓存更新 */
    const createOrUpadte = (node: NodeType) => {
      const index = findById(node.nodeId!);
      if (index > -1) {
        //更新操作
        nodes.splice(index, 1, node);
      } else {
        //新建
        nodes.push(node);
      }
    };
    /*Node---根据当前选中节点新建Node*/
    const newNode = (url: string, active: string, title: string): NodeType => {
      return {
        nodeId: currentNode.node?.id,
        dataurl: url,
        graphId: props.graphDesc?.id,
        active: active,
        title: title,
      };
    };

    onMounted(() => {
      props.graph?.on("node:click", ({ node }) => {
        currentNode.node = node;
        let index = findById(node.id);
        if (index > -1) {
          currentIndex.value = index;
        } else {
          currentIndex.value = nodes.length;
          nodes.push(newNode("", "", ""));
        }
        visibleDrawer.value = true;
        if (!initFinsh.value) {
          initFinsh.value = true;
        }
      });
    });
    return {
      nodes,
      visibleDrawer,
      currentNode,
      currentIndex,
      nodeForm,
      initFinsh,
    };
  },
};
</script>

<style></style>
