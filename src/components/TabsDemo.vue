<template>
  <h2>示例1</h2>
  <Tabs v-model:selected="tab">
    <Tab title="Tab1">内容1</Tab>
    <Tab title="Tab2 ">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
export default {
  components: { Tabs, Tab },
  setup() {
    const tab = ref('Tab1');
    return { tab };
  }
};
</script>
<style lang=""></style>
