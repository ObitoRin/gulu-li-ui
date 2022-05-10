<template>
  <section>
    <div>
      <h2>示例1</h2>
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

    <div>
      <h2>示例2</h2>
      <Button @click="showDialog">openDialog</Button>
    </div>
  </section>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import { openDialog } from '../lib/openDialog';
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {};
    const cancel = () => {};

    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };

    return { visible, toggle, ok, cancel, showDialog };
  }
};
</script>
