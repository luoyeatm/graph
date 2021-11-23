<template>
  <!-- <div> -->
  <a-row>
    <a-col :span="8">
      <div>{{ label }}:</div>
    </a-col>
    <a-col :span="16">
      <!-- <div :style="`background-color: #21565222;`" class="color" @click="show"></div> -->
      <div
        :style="`background-color: ${color2};`"
        class="color"
        @click="show"
      ></div>
    </a-col>
  </a-row>
  <picker v-if="visible" @mouseleave="close" v-model:color="color2" />
  <!-- </div> -->
</template>

<script lang="ts">
import Picker from "@/components/color/Picker.vue";
import { reactive, ref, watch } from "vue";
export default {
  components: { Picker },
  props: {
    label: String,
    color: String,
  },
  emits: {
    // 无需验证写法
    //颜色change事件 ,写这里防止浏览器报黄色警告，emits 不影响代码执行
    "change": null,
    //
    "update:color" : null,
  },
  setup(props, context) {
    // let backgroundColor =

    // backgroundColor = props.color|| "";
    let visible = ref(false);
    let color2 = ref(props.color);

    // value = props.color;
    watch(color2, (newValue) => {
      console.log(newValue);
      context.emit("update:color", newValue);
      context.emit("change");
    });
    watch(()=>props.color, (newValue) => {
     color2.value= newValue

    });
    const show = () => {
      visible.value = true;
    };
    const close = () => {
      visible.value = false;
    };

    return { color2, visible, show, close };
  },
};
</script>

<style lang="less" scoped>
.color {
  width: 90%;
  height: 90%;
  border-radius:5px
  // background-color: #000000;
}
</style>
