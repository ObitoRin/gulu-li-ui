<demo>
点击遮罩层不可关闭
</demo>

<template>
  <div>
    <Button @click="toggle">点击打开 Dialog</Button>
    <Dialog
      v-model:visible="visible"
      :onClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
    >
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
import { Button, Dialog } from "../lib/index";
export default {
  components: {
    Button,
    Dialog,
  },
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
