<template>
  <a-row>
    <a-col><a-button @click="showForm">新建</a-button></a-col>
  </a-row>
  <a-modal :visible="visible" @ok="create" @cancel="closeForm">
    <a-form>
      <a-form-item label="组态名称">
        <a-input v-model:value="currentGraph.name" />
      </a-form-item>
      <a-form-item label="宽度">
        <a-input v-model:value="currentGraph.width" />
      </a-form-item>
      <a-form-item label="高度">
        <a-input v-model:value="currentGraph.height" />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-table
    :rowKey="
      (record, index) => {
        return index;
      }
    "
    :columns="table.columns"
    :data-source="table.data"
  >
    <template v-slot:name="{text}">
      <a>{{ text }}</a>
      <!-- <a>{{ record }}</a> -->
    </template>

    <template #action="{text,record}">
        
      <a-button @click="selectedGraph(record)">展示</a-button>
    </template>
  </a-table>
</template>

<script lang="ts">
import { getCurrentInstance, ref, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default {
  setup() {
    const currentGraph = reactive({ name: "", length: "", width: "" });
    const visible = ref(false);
    const table = reactive({
      columns: [
        {
          title: "名称",
          width: 220,
          dataIndex: "name",
          slots: { customRender: "name" },
        },
        {
          title: "宽度",
          width: 80,
          dataIndex: "width",
        },
        {
          title: "高度",
          width: 80,
          dataIndex: "height",
        },
        {
          title: "Action",
          key: "action",
          //   scopedSlots: { customRender: "action" },
          slots: { customRender: "action" },
        },
      ],
      data: [],
    });
    const store = useStore(key);
    const { proxy } = getCurrentInstance();
    const api = proxy.$api;
    const load = () => {
      api.graph.graph.pages().then((body: any) => {
        console.log(body.data);
        table.data = body.data;
      });
    };
    load();
    const create = () => {
      api.graph.graph.saveOrUpdate(currentGraph).then((body: any) => {
        console.log(body.data);
        table.data = body.data;
        visible.value = false;
        load();
      });
    };
    const showForm = () => {
      visible.value = true;
    };
    const closeForm = () => {
      visible.value = false;
    };
    const selectedGraph = (val) => {
      
      console.log(store)
      store.commit("common/setGraph", val);
      console.log("................");
      console.log(val);
    };

    return {
      table,
      create,
      currentGraph,
      visible,
      showForm,
      closeForm,
      selectedGraph,
    };
  },
};
</script>

<style></style>
