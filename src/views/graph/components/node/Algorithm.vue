<template>
  <a-button @click="change">编辑算法</a-button>


</template>

<script lang="ts">
export default {

  props: {
    modelValue: String,
  },
  data() {
    return {
      active: '1,1,1,1,1,1',
    };
  },
  methods: {
    change() {
     console.log(232);
      this.$emit("update:modelValue", this.active);
      this.$emit("change");
    },
  },
  mounted() {},
};
</script>

<style></style>
