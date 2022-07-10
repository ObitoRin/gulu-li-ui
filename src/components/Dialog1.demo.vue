<demo>
常规使用
</demo>

<template>
  <div>
    <li-button @click="toggle">点击打开 Dialog</li-button>
    <li-dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <strong>提示</strong>
      </template>
      <template v-slot:content>
        <div>hi</div>
        <div>这是一段信息</div>
      </template>
    </li-dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {};
    const cancel = () => {};

    return { visible, toggle, ok, cancel };
  }
};
</script>
