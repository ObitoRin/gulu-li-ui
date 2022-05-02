<template>
  <div>
    <!-- 自动监听 value 的变化 -->
    <Switch v-model:value="y" />

    <!-- <Switch :value="y" @update:value="y = $event" /> -->
    <!-- $event 是 emit 传的值 -->
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
export default {
  components: { Switch },
  setup() {
    const y = ref(false);
    return { y };
  }
};
</script>
