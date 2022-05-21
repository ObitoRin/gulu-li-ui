<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">点击打开 Dialog</Button>
    <Dialog title="标题" v-model:visible="visible" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <strong>提示</strong>
      </template>
      <template v-slot:content>
        <div>hi</div>
        <div>这是一段信息</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
export default {
  components: { Dialog, Button },
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
