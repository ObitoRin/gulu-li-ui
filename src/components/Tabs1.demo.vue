<demo>
常规使用
</demo>

<template>
  <div>
    <Tabs v-model:selected="tab">
      <Tab title="Tab1">Tab1</Tab>
      <Tab title="Tab2 ">Tab2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import {
  Tabs,
  Tab
} from "../lib/index";
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const tab = ref('Tab1');
    return { tab };
  }
};
</script>
