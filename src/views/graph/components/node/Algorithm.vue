<template>
  <a-button @click="show">编辑算法</a-button>
  <a-drawer
    :closable="false"
    :visible="visible"
    @close="onClose"
    title="节点属性"
    placement="right"
  >
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <div v-for="(item, index) in algorithmForm" :key="index">
        <a-form-item
          v-if="item.type === 'text'||item.type === 'symbol' "
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
          <algorithm @change="change(index)" v-model="form[item.name]" />
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
    </a-form>
  </a-drawer>
</template>

<script lang="ts">
import { ref, reactive ,watch,onBeforeUpdate} from "vue";
import { NodeFormItem } from "@/typings/graph";
import { useForm } from "@ant-design-vue/use";
import PickerItem from "@/components/color/PickerItem.vue";
export default {
  components: { PickerItem },
  props: {
    modelValue: String,
    algorithmForm: Array,
  },
  emits: {
    "update:modelValue": null,
    "change": null,
  },
  setup(props, context) {
    const active = ref(props.modelValue);
    const visible = ref(false);
    const change = () => {
      let value = "";
      props.algorithmForm.map((item:NodeFormItem, index) => {
        value += form[item.name];
  
        if (index !== props.algorithmForm.length - 1) {
          value += ",";
        }
      });
      active.value = value;
      console.log(232);
      context.emit("update:modelValue", active.value);
      context.emit("change");
    };
    const onClose = () => {
      visible.value = false;
    };
    const show = () => {
      resetFields(initForm())
      visible.value = true;
    };

    const initForm = () => {
      const ob = new Object();
      let init = false;
      if (props.modelValue) {
        let values = props.modelValue.split(",");
        if (values.length === props.algorithmForm.length) {
          console.log("0000");

          props.algorithmForm?.map((item: NodeFormItem, index) => {
            let value = values[index];
            if(item.type == "number-slider"){
              
              ob[item.name] = parseInt(value)
            }else{
              ob[item.name] =value

            }
          });
          init = true;
        }
      }
      if (!init){
        props.algorithmForm?.map((item: NodeFormItem, index) => {
          ob[item.name] = item.defult;
        });
      }
      return ob;
    };
    const form = reactive(initForm());
    const rulesRef = reactive({
      // userName: [{ required: true, message: "请输入用户名" }],
      // password: [{ required: true, message: "请输入密码" }],
    });
    // onBeforeUpdate(()=>{initForm()})
    const { resetFields, validate, validateInfos } = useForm(form, rulesRef);
    return {
      active,
      visible,
      show,
      change,
      onClose,
      form,
      resetFields,
      validate,
      validateInfos,
    };
  },
};
</script>

<style></style>
