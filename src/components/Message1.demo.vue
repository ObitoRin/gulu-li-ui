<demo>
  Message 函数
</demo>

<template>
  <div>
    <Button level="primary" size="normal" @click="openSuccessMessage"
      >打开成功消息提示</Button
    >
  </div>
  <div>
    <Button level="warning" size="normal" @click="openWarningMessage"
      >打开警告消息提示</Button
    >
  </div>
  <div>
    <Button level="danger" size="normal" @click="openErrorMessage"
      >打开失败消息提示</Button
    >
  </div>
</template>

<script lang="ts">
import { Button, message as Message } from "../lib/index";

export default {
  components: { Button },
  setup() {
    const openSuccessMessage = () => {
      Message({
        type: "success",
        text: "成功消息提示",
      });
    };
    const openWarningMessage = () => {
      Message({
        type: "warning",
        text: "警告消息提示",
      });
    };
    const openErrorMessage = () => {
      Message({
        type: "error",
        text: "失败消息提示",
      });
    };
    return { openSuccessMessage, openWarningMessage, openErrorMessage };
  },
};
</script>
<style lang="scss" scoped>
div {
  margin: 8px 0;
}
</style>