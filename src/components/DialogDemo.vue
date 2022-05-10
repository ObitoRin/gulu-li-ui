<template>
  <div>Dialog 示例</div>
  <div style="position: relative; z-index: 1">
    <Button @click="toggle">toggle</Button>
    <Dialog
      title="标题"
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
  <div
    style="
      position: relative;
      z-index: 2;
      width: 300px;
      height: 300px;
      background: red;
    "
  ></div>
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
    const ok = () => {
      visible.value = false;
    };
    const cancel = () => {
      visible.value = false;
    };
    return { visible, toggle, ok, cancel };
  }
};
</script>
<style lang=""></style>
