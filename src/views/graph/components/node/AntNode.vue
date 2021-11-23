<template>
  <div>
    <a-button @click="create">根据文件创建</a-button>
    <a-button @click="updateByFile">根据文件更新</a-button>
    <a-button @click="save">保存</a-button>
    <node-form-defult
      v-if="initFinsh"
      :currentNode="currentNode.node"
      :nodeForm="nodeForm"
      :graph="graph"
      v-model:visible="visibleDrawer"
      v-model:nodeData="nodes[currentIndex]"
      @delete="deleteNode"
    />
  </div>
</template>

<script lang="ts">
/**vue 3.0 语法 */
import { nodeTemplateMap } from "@/views/graph/components/stencil/template";
import { Graph, Node } from "@antv/x6";
import NodeFormDefult from "./NodeFormDefult.vue";
import { NodeType, GraphType } from "@/typings/graph";
import { ref, reactive, computed, onMounted, getCurrentInstance } from "vue";
import graph from "@/api/graph";
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
        return nodeTemplateMap[node?.getData().type];
      } else {
        return [];
      }
    });
    const { proxy } = getCurrentInstance();
    const api = proxy.$api;
    const create = () => {
      api.graph.graph.readJson({ id: "json" }).then((json: any) => {
        json.map((item) => {
          const index = nodes.findIndex(
            (val) => val!.num == item.num && val.type == item.type
          );
          if (index > -1) {
          } else {
            props.graph.getSelectedCells;
            const node = props.graph.createNode({
              shape: "html",
              width: 60,
              height: 60,
              label: item.num,
              html: () => {
                const wrap = document.createElement("div");
                wrap.style.width = "100%";
                wrap.style.height = "100%";
                // wrap.innerText = "警告";
                return wrap;
              },
              data: { type: "html", message: item.type },
            });

            // props.graph.addNode()
            currentNode.node = node;
            nodes.push(newNode(item.url, "", item.num));
            const node2 = props.graph.createNode({
              shape: "html",
              width: 60,
              height: 60,
              label: item.num,
              html: () => {
                const wrap = document.createElement("div");
                wrap.style.width = "100%";
                wrap.style.height = "100%";
                // wrap.innerText = "警告";
                return wrap;
              },
              data: { type: "html", message: "警告" },
            });
            props.graph.addNode(node);
            props.graph.addNode(node2);
            // props.graph.addNode()
            currentNode.node = node2;
            nodes.push(newNode(item.url2, "", item.num));
          }
        });
      });
    };
    api.graph.node.lists(props.graphDesc).then((value) => {
      console.log(value);
      value.map((node) => {
        nodes.push(node);
      });
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
        graphId: props.graphDesc?.graphId,
        active: active,
        title: title,
      };
    };
    const deleteNode = () => {
      props.graph.removeNode(currentNode.node.id);
      let index = findById(currentNode.node.id);
      if (index > -1) {
        nodes.splice(index, 1);
      }
    };

    const save = () => {
      api.graph.graph
        .saveJson({
          json: JSON.stringify(props.graph.toJSON()),
          id: props.graphDesc.graphId,
        })
        .then((value) => {
          console.log(value);
        });
      api.graph.node.saveOrUpdateBatch(nodes).then((value) => {
        console.log(value);
      });
    };
    const updateByFile = () => {
      // nodes.map((node,index)=>{nodes[index].num= node.title})
      // props.graph.getNodes().map((node=>{
      //   nodes[findById(node.id)].type = node.data.message
      // }))
      api.graph.graph.readJson({ id: "json" }).then((json: any) => {
        console.log(json)
        json.map((item) => {
          console.log(item);
          const index = nodes.findIndex(
            (val) => val!.num == item.num && val.type == item.type
          );
          if (index > -1) {
            nodes[index].title = item.title;
            nodes[index].dataurl = item.url;
            nodes[index].active = item.active;
              nodes[index].pre = item.pre;
            if (item.type == "模拟量") {
              nodes[index].after = item.after;
            }
          }
          const index2 = nodes.findIndex(
            (val) => val!.num == item.num && val.type == "警告"
          );
          if (index2 > -1) {
            nodes[index2].active = item.active2;
            nodes[index2].title = item.title;
            nodes[index2].dataurl = item.url2;
          }
        });
      });
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
      save,
      deleteNode,
      create,
      updateByFile,
    };
  },
};
</script>

<style></style>
