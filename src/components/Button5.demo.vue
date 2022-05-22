<demo>
支持 loading
</demo>

<template>
  <div :style="{ display: 'flex' }">
    <li-button loading>加载中</li-button>
    <li-button :loading="loading" @click="stopLoading"
      >点击关闭 loading</li-button
    >
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const loading = ref(true);
    const stopLoading = () => {
      loading.value = false;
    };
    return {
      loading,
      stopLoading
    };
  }
};
</script>
