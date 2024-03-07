<template>
  <div>
    <h1>Message 示例</h1>
    <Demo :component="Message1Demo" />
    <Demo :component="Message2Demo" />
  </div>
</template>

<script lang='ts'>
import Message1Demo from "./Message1.demo.vue";
import Message2Demo from "./Message2.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Message1Demo, Message2Demo };
  },
};
</script>