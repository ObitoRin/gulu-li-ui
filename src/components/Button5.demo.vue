<demo>
支持 loading
</demo>

<template>
  <div :style="{ display: 'flex' }">
    <Button loading>加载中</Button>
    <Button :loading="loading" @click="stopLoading">点击关闭 loading</Button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
export default {
  components: {
    Button
  },
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
