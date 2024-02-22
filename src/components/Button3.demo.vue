<demo>
支持 level
</demo>

<template>
  <div class="li-button-level-container">
    <div>
      <Button level="normal">普通按钮</Button>
      <Button level="primary">主要按钮</Button>
      <Button level="success">成功按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="normal">普通链接按钮</Button>
      <Button theme="link" level="primary">主要链接按钮</Button>
      <Button theme="link" level="success">成功链接按钮</Button>
      <Button theme="link" level="warning">警告链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="plain" level="normal">普通朴素按钮</Button>
      <Button theme="plain" level="primary">主要朴素按钮</Button>
      <Button theme="plain" level="success">成功朴素按钮</Button>
      <Button theme="plain" level="warning">警告朴素按钮</Button>
      <Button theme="plain" level="danger">危险朴素按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss">
.li-button-level-container {
  > div {
    > .li-button {
      margin: 0 8px 12px 0;
    }
  }
}
</style>