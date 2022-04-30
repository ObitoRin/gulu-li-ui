<template>
  <!-- 在App.vue中展示路由对应的组件 -->
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false);
    provide('xxx', menuVisible); // set
  }
};
</script>
