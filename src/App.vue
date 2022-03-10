<template>
  <router-view></router-view>
</template>

<script lang="ts">

import * as echarts from 'echarts'
import { defineComponent, provide } from "vue";
export default {
  name: 'App',
  setup(){
    provide('ec',echarts)//provide
  },
  components: {
  }
}

</script>

<style lang="less">
.a {
  color: red;
}
</style>
