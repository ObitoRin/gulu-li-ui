<template>
  <h2>示例1</h2>
  <Tabs v-model:selected="tab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
export default {
  components: { Tabs, Tab },
  setup() {
    const tab = ref('导航1');
    return { tab };
  }
};
</script>
<style lang=""></style>
