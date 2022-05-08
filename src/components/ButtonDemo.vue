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
    <Button>Click it</Button>
    <Button level="primary">Click it</Button>
    <Button level="success">Click it</Button>
    <Button level="warning">Click it</Button>
    <Button level="danger">Click it</Button>
  </section>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return { onClick };
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
