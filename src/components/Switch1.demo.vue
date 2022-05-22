<demo>
常规使用
</demo>

<template>
  <li-switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>
