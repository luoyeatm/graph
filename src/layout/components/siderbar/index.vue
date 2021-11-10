<!--  -->
<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    collapsible
  >
    <div class="logo" />
    <a-menu
      theme="dark"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <a-menu-item key="1">
        <router-link to="/home">
        <pie-chart-outlined />
        <span>主图</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/graphList">
        <pie-chart-outlined />
        <span>列表</span>
        </router-link>
      </a-menu-item>
      <!-- <a-menu-item key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item> -->
      <!-- <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu> -->
      <!-- <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item> -->
    </a-menu>
  </a-layout-sider>
</template>

<script lang='ts'>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
export default {
   components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  setup() {
    const collapsed = ref<boolean>(false)
    const selectedKeys = ref<string[]>(["2"])
    return {
      collapsed,
      selectedKeys
    };
  },
};
</script>
<style lang='less' scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>