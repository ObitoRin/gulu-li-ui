<demo>
常规使用
</demo>

<template>
  <div>
    <li-tabs v-model:selected="tab">
      <li-tab title="Tab1">内容1</li-tab>
      <li-tab title="Tab2 ">内容2</li-tab>
    </li-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const tab = ref('Tab1');
    return { tab };
  }
};
</script>
