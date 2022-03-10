<template>
  <a-list :grid="{ gutter: 16, column: 3 }" :data-source="detailPage.data">
    <template #renderItem="{ item }">
      <a-list-item v-if="detailPage.type =='模拟量'">
        <a-card hoverable >
          <template #cover>
           <water-height :data="item.height" :color ="detailPage.color" >

           </water-height>
            <!-- <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            /> -->
          </template>
          <template #actions>
            <p :v-if="item.T">温度：<br/>{{item.T?item.T:0}}</p>
            <p :v-if="item.P">压力：<br/>{{item.P?item.P:0}}</p>
            <p :v-if="item.F">流量：<br/>{{item.F?item.F:0}}</p>
            <!-- <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" /> -->
          </template>
          <a-card-meta
            :title="detailPage.name+item.pre"
            description=""
          >
            <template #avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </template>
          </a-card-meta>
        </a-card>
      </a-list-item>
      <a-list-item v-if="detailPage.type =='开关量'">
        <a-card hoverable >
          <template #cover>
          <!--  -->
            <img :src="'image/' + item.image" />
           <!-- </water-height> -->
            <!-- <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            /> -->
          </template>
          <template #actions>
            <p>状态:{{item.state?"开启":"关闭"}}</p>
            <p>告警:无</p>
            <!--  <p :v-if="item.P">压力：<br/>{{item.P?item.P:0}}</p> -->
            <!-- <p :v-if="item.F">流量：<br/>{{item.F?item.F:0}}</p>  -->
            <!-- <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" /> -->
          </template>
          <a-card-meta
            :title="detailPage.name+item.pre"
            description=""
          >
            <template #avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import waterHeight from "../waterHight/index.vue"
// import { defineComponent } from "vue";
interface DataItem {
  title: string;
  name?: string
  data?: any
}

export default {
  components:{
    "water-height":waterHeight
  },
  props:{
    detailPage : Object
  },
  setup(props,context) {
   // console.log(waterHeight.)
    console.log(props.detailPage)
    return {
    };
  },
};
</script>
