<demo>
支持 disabled
</demo>

<template>
  <li-switch v-model:value="bool" disabled />
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
