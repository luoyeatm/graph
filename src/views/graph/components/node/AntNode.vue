<template>
  <div>
    <a-button @click="copy">复制</a-button>
    <a-button @click="paste">粘贴</a-button>
    <a-button @click="create">根据文件创建</a-button>
    <a-button @click="updateByFile">根据文件更新</a-button>
    <a-button @click="save">保存</a-button>
    <node-form-defult
      v-if="initFinsh"
      :currentNode="currentNode.node"
      :nodeForm="nodeForm"
      :graph="graph"
      v-model:visible="visibleDrawer"
      v-model:nodeData="nodeMap.value[currentIndex]"
      @delete="deleteNode"
    />
  </div>
</template>

<script lang="ts">
/**vue 3.0 语法 */
import { nodeTemplateMap } from "@/template/formModel";
import { Graph, Node } from "@antv/x6";
import NodeFormDefult from "./NodeFormDefult.vue";
import { NodeType, GraphType } from "@/typings/graph";
import { ref, reactive, computed, onMounted, getCurrentInstance } from "vue";
import { message } from "ant-design-vue";
import graph from "@/api/graph";
import { attrEnum } from "@/enum/common";
export default {
  components: { NodeFormDefult },
  props: {
    graph: Graph,
    graphDesc: Object,
    init: Boolean,
  },
  setup(props, context) {
    //node节点属性缓存
    const nodeMap = reactive({ value: {}, max: 0 });
    //显示隐藏
    const visibleDrawer = ref(false);
    //当前节点
    const currentNode = reactive({ node: {} });
    //当前业务数据下标
    const currentIndex = ref(-1);
    //数据加载完毕
    const initFinsh = ref(false);
    //表格移动适配
    const preMoveSize = ref({ width: 0, height: 0 });
    const prePosition = ref({ x: 0, y: 0 });

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
    api.graph.node.lists(props.graphDesc).then((value) => {
      nodeMap.value = value;
      nodeMap.max = parseInt(
        Object.keys(nodeMap.value)
          .sort((a, b) => parseInt(a) - parseInt(b))
          .slice()
          .pop()
      );
    });
    const create = () => {
      api.graph.graph.readJson({ id: "json" }).then((json: any) => {
        console.log(nodeMap);
        json.map((item) => {
          let nodeProp = nodeMap.value[item.num];
          if (nodeProp) {
          } else {
            props.graph.getSelectedCells;
            const node = props.graph.createNode({
              shape: "html",
              width: 10,
              height: 10,
              label: item.num,
              html: () => {
                const wrap = document.createElement("div");
                wrap.style.width = "100%";
                wrap.style.height = "100%";
                // wrap.innerText = "警告";
                return wrap;
              },
              data: {
                type: "html",
                message: item.type,
                num: item.num,
                pre: item.pre,
                after: item.after,
                max: item.max,
              },
            });

            // props.graph.addNode()
            currentNode.node = node;
            const nodeData = newNode(item.url, "", item.num, item.num);
            nodeData.num = item.num;
            nodeMap.value[item.num] = nodeData;
            props.graph.addNode(node);
          }
        });
      });
    };

    /*Node---缓存查询 */
    // const findById = (id: string) => {
    //   const index = nodes.findIndex((val) => val!.nodeId === id);
    //   return index;
    // };

    /*Node---缓存更新 */
    // const createOrUpadte = (node: NodeType) => {
    //   const index = findById(node.nodeId!);
    //   if (index > -1) {
    //     //更新操作
    //     nodes.splice(index, 1, node);
    //   } else {
    //     //新建
    //     nodes.push(node);
    //   }
    // };
    /*Node---根据当前选中节点新建Node*/
    const newNode = (
      url: string,
      active: string,
      title: string,
      num: string
    ): NodeType => {
      return {
        nodeId: currentNode.node?.id,
        dataurl: url,
        graphId: props.graphDesc?.graphId,
        active: active,
        title: title,
        num: num,
      };
    };
    const deleteNode = () => {
      props.graph.removeNode(currentNode.node.id);
      // let index = findById(currentNode.node.id);
      // if (index > -1) {
      //   nodes.splice(index, 1);
      // }
    };

    const save = () => {
      api.graph.graph
        .saveJson({
          json: JSON.stringify(props.graph.toJSON()),
          id: props.graphDesc.graphId,
        })
        .then((value) => {
          console.log(value);
          if (value) {
            message.info("保存画面成功");
          }
        });
      api.graph.node
        .saveOrUpdateBatch(Object.values(nodeMap.value))
        .then((value) => {
          console.log(value);
          message.info("保存数据成功");
        });
    };
    const updateByFile = () => {
      // console.log(nodes)
      // props.graph.getNodes().map((node) => {
      //   if (node.data.type === "parent") {
      //     if (!node.getChildren()) {
      //       props.graph.removeNode(node);
      //     }
      //   }
      // });
      api.graph.graph.readJson({ id: "json" }).then((json: any) => {
        // num 矫正
         Object.values(nodeMap.value).map((nodeData)=>{
            let node = props.graph.getCellById(nodeData.nodeId)
            nodeData.num =  node.data.num
            nodeMap[node.data.num] = nodeData
         })
        json.map((item) => {
          let nodeProp = nodeMap.value[item.num];

          if (!nodeProp) {
            let nodes = props.graph.getNodes();

            nodes.map((_node) => {
              if (_node.data.num == item.num) {
                currentNode.node = _node;
              }
            });
            nodeProp = newNode("", "", "", item.num);
            nodeMap.value[item.num] = nodeProp;
          } else {
            currentNode.node = props.graph.getCellById(nodeProp.nodeId);
          }
          nodeProp.title = item.title;
          nodeProp.dataurl = item.url;
          nodeProp.active = item.active;
          nodeProp.pre = item.pre;
          nodeProp.type = item.type;
          const node = currentNode.node as Node
          console.log(node)
          if (node.data.after) {
            node.data.after = item.after;
          }
          if (node.data.pre) {
            node.data.pre = item.pre;
            // currentNode.data.after = item.after;
            if (item.pre && (item.pre as string).search("液位") > -1) {
              let max = "100";

              if (item.max && parseInt(item.max) > 100) {
                max = item.max;
              }
              node.data.max = max;
              if (node.hasParent()) {
                let parent = node.getParent();
                if (parent.hasParent()) {
                  parent.getParent().data.max = max;
                }
              }
            }
          }

          nodeProp.after = item.after;
        });
      });
    };
    const copy = () => {
      const cells = props.graph.getSelectedCells();
      console.log(cells);
      if (cells && cells.length) {
        props.graph.copy(cells, {
          deep: true,
          useLocalStorage: true,
        });
        message.success("复制成功");
      } else {
        message.info("请先选中节点再复制");
      }
    };
    const paste = () => {
      if (props.graph.isClipboardEmpty()) {
        message.info("剪切板为空，不可粘贴");
      } else {
        const cells = props.graph.paste({ useLocalStorage: true });
        console.log(cells)
        // cells.get()
        if (cells.length > 1) {
          let parent = cells.shift();
          parent.setChildren(cells);
        }

        props.graph.cleanSelection();
        // props.graph.select(cells);
        message.success("粘贴成功");
      }
    };

    onMounted(() => {
      props.graph?.on("node:resize", ({ x, y, node, view }) => {
        preMoveSize.value = node.getSize();
        prePosition.value = node.getPosition();
      });

      props.graph?.on("node:resized", ({ x, y, node, view }) => {
        console.log(node.getPosition());
        const afterMoveSize = node.getSize();
        const afterPosition = node.getPosition();
        const children = node.getChildren();
        if (children) {
          children.map((child) => {
            const childNode = child as Node;
            //列宽
            //let colWidth = preMoveSize.value.width/node.data.col
            //行高
            //let rowHeight = preMoveSize.value.height/node.data.row
            let width =
              (childNode.getPosition().x +
                childNode.getSize().width / 2 -
                prePosition.value.x) *
              (afterMoveSize.width / preMoveSize.value.width);
            let height =
              (childNode.getPosition().y +
                childNode.getSize().height / 2 -
                prePosition.value.y) *
              (afterMoveSize.height / preMoveSize.value.height);
            let afterX =
              afterPosition.x + width - childNode.getSize().width / 2;
            let afterY =
              afterPosition.y + height - childNode.getSize().height / 2;

            childNode.setPosition(afterX, afterY);
          });
        }
      });

      props.graph?.on("node:contextmenu", ({ node }) => {
        currentNode.node = node;
      });

      props.graph?.on("node:click", ({ node }) => {
        currentNode.node = node;
        if (node.data.type == "html" || node.data.type == "circle") {
          let nodeProp = nodeMap.value[node.data.num];
          if (!node.data.num) {
            nodeMap.max += 1;
            node.data.num = nodeMap.max;
            console.log(nodeMap.max);
          }
          currentIndex.value = node.data.num;
          if (!nodeProp) {
            console.log(node);
            console.log(currentNode.node);
            console.log(currentIndex.value);

            nodeMap.value[node.data.num] = newNode(
              "",
              "",
              "",
              nodeMap.max.toString()
            );
          }
        }
        visibleDrawer.value = true;
        if (!initFinsh.value) {
          initFinsh.value = true;
        }
      });
    });
    return {
      copy,
      paste,
      nodeMap,
      visibleDrawer,
      currentNode,
      currentIndex,
      nodeForm,
      initFinsh,
      save,
      deleteNode,
      create,
      updateByFile,
      preMoveSize,
      prePosition,
    };
  },
};
</script>

<style></style>
