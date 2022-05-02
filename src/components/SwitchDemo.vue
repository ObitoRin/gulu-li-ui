<template>
  <div>
    <Switch :value="y" @switchToggle="y = $event" />
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
