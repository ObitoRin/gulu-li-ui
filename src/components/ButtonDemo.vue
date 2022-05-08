<template>
  <div>Button 示例</div>
  <section>
    <h1>示例1</h1>
    <div>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
  </section>

  <section>
    <h1>示例2</h1>
    <div>
      <Button size="big">大大大</Button>
      <Button>普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="link">大大大</Button>
      <Button theme="link">普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </section>

  <section>
    <h1>示例3</h1>
    <Button>默认按钮</Button>
    <Button level="primary">主要按钮</Button>
    <Button level="success">成功按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
  </section>

  <section>
    <h1>示例4</h1>
    <Button disabled>禁用按钮</Button>
    <Button disabled theme="link">禁用链接按钮</Button>
    <Button disabled theme="text">禁用文字按钮</Button>
  </section>

  <section>
    <h1>示例5</h1>
    <Button loading>加载中</Button>
    <Button :loading="loading" @click="stopLoading">点击关闭 loading</Button>
  </section>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
export default {
  components: { Button },
  setup() {
    const loading = ref(true);
    const stopLoading = () => {
      loading.value = false;
    };
    return { loading, stopLoading };
  }
};
</script>
<style lang="scss" scoped>
section {
  margin: 24px 0;
  > h1 {
    margin: 12px 0;
  }
  > div {
    margin: 10px 0;
  }
}
</style>
