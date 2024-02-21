<demo>
点击遮罩层不可关闭
</demo>

<template>
  <div>
    <Button @click="open">点击打开 Dialog</Button>
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
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
    // const toggle = () => {
    //   visible.value = !visible.value;
    // };
    const open = () => {
      visible.value = true;
    };
    const ok = () => {};
    const cancel = () => {};

    return { visible, open, ok, cancel };
  }
};
</script>
