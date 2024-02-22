<demo>
支持 disabled
</demo>

<template>
  <div>
    <Button theme="button" disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="plain" disabled>禁用朴素按钮</Button>
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