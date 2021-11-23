<template>
  <div>
    <a-drawer
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      title="节点属性"
      placement="right"
    >
      <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
        <div v-for="(item, index) in nodeForm" :key="index">
          <a-form-item
            v-if="item.type === 'text'"
            v-bind="validateInfos[item.name]"
            :label="item.label"
          >
            <a-input @change="change(index)" v-model:value="form[item.name]">
            </a-input>
          </a-form-item>
          <a-form-item
            v-if="item.type === 'number'"
            v-bind="validateInfos[item.name]"
            :label="item.label"
          >
            <a-input @change="change(index)" v-model:value="form[item.name]">
            </a-input>
          </a-form-item>
          <a-form-item
            v-if="item.type === 'number-slider'"
            v-bind="validateInfos[item.name]"
            :label="item.label"
          >
            <a-slider
              @change="change(index)"
              v-model:value="form[item.name]"
              :marks="item.marks"
            />
          </a-form-item>
          <a-form-item
            v-if="item.type === 'algorithm'"
            v-bind="validateInfos[item.name]"
            :label="item.label"
          >
            <algorithm
              @change="change(index)"
              v-model="form[item.name]"
              :algorithmForm="item.algorithm.form"
            />
          </a-form-item>
          <a-form-item
            :label-col="{ span: 0 }"
            :wrapper-col="{ span: 24 }"
            v-if="item.type === 'color'"
            v-bind="validateInfos[item.name]"
          >
            <picker-item
              @change="change(index)"
              v-if="item.type === 'color'"
              v-model:color="form[item.name]"
              :label="item.label"
            />
          </a-form-item>
        </div>
        <a-form-item label="操作">
          <a-button @click="deleteNode">删除</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>
<script lang="ts">
/** vue 3.0 语法 使用新特性 不可降2.0*/
import { reactive, ref, watch, computed, onUpdated } from "vue";
import { useForm } from "@ant-design-vue/use";
import { NodeFormItem, NodeType } from "@/typings/graph";
import type { UnwrapRef } from "vue";
import { Graph, Node } from "@antv/x6";
import Algorithm from "./Algorithm.vue";
import Picker from "@/components/color/Picker.vue";
import PickerItem from "@/components/color/PickerItem.vue";

export default {
  components: { Algorithm, Picker, PickerItem },
  props: {
    //模版组件弹窗外置触发开关
    visible: Boolean,
    nodeForm: Array,
    graph: Graph,
    currentNode: Node,
    type: String,
    nodeData: Object,
  },
  emits: {
    "update:visible": null,
    "update:nodeData": null,
    delete: null,
  },
  setup(props, context) {
    let nodeDataSave = props.nodeData as NodeType;
    if (!nodeDataSave) {
      nodeDataSave = {};
    }
    const initForm = () => {
      const ob = new Object();
      const nodeForm = props.nodeForm as UnwrapRef<NodeFormItem>[];
      const currentNode = props.currentNode as Node;
      const nodeData = props.nodeData as NodeType;
      nodeForm?.map((item, index) => {
        let value: any = "";

        if (item.func) {
          value = item.func(currentNode);
        } else if (item.dom) {
          const view = props.graph.findView(props.currentNode);
          const contentElem = view.findOne(
            "foreignObject > body > div>div"
          ) as HTMLElement;
          value = item.dom(contentElem);
        } else if (item.attr) {
          value = currentNode.getAttrByPath(item.attr);
          if (item.type === "color") {
            if (!value) {
              value = "#232323";
            } else if (value === "none") {
              value = "#23232300";
            }
          }
        } else if (item.save) {
          value = nodeData[item.save];
          if (!value) {
            value = "";
          }
        } else if (item.defult) {
          if (!value) {
            value = item.defult;
          }
        }
        if (item.type === "number" || item.type === "number-slider") {
          if (!value || value == "") {
            value = 0;
          }
        }
        ob[item.name] = value;
      });
      return ob;
    };
    const form = reactive(initForm());
    watch(
      () => props.currentNode,
      (newValue) => {
        if (props.visible) {
          nodeDataSave = props.nodeData as NodeType;
          const obj = initForm();
          resetFields(obj);
        }
      }
    );
    //弹窗变化触发
    const afterVisibleChange = (val: boolean) => {
      if (val) {
        // Object.assign(form, initForm());
      }
    };
    const rulesRef = reactive({
      // userName: [{ required: true, message: "请输入用户名" }],
      // password: [{ required: true, message: "请输入密码" }],
    });

    const { resetFields, validate, validateInfos } = useForm(form, rulesRef);
    const change = (index: number) => {
      const item = props.nodeForm![index] as NodeFormItem;
      console.log(item);
      if (item.save) {
        nodeDataSave[item.save] = form[item.name];
      }
      if (item.func) {
        item.func(props.currentNode, form[item.name]);
      } else if (item.attr) {
        props.currentNode?.setAttrByPath(item.attr, form[item.name]);
      } else if (item.dom) {
        const view = props.graph.findView(props.currentNode);
        const contentElem = view.findOne(
          "foreignObject > body > div>div"
        ) as HTMLElement;
        item.dom(contentElem, form[item.name]);
      }
    };
    //弹窗关闭
    const onClose = () => {
      context.emit("update:visible", false);
      context.emit("update:nodeData", nodeDataSave);
    };

    const deleteNode = () => {
      context.emit("delete");
    };
    return {
      form,
      nodeDataSave,
      validateInfos,
      resetFields,
      change,
      afterVisibleChange,
      onClose,
      deleteNode,
    };
  },
};
</script>

<style lang="less" scoped>
.ant-slider {
  top: -15px;
}
</style>
