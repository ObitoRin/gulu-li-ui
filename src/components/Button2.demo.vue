<demo>
支持 size
</demo>

<template>
  <div>
    <div>
      <Button size="big">大按钮</Button>
      <Button>普通</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <Button size="big" theme="link">大按钮</Button>
      <Button theme="link">普通</Button>
      <Button size="small" theme="link">小按钮</Button>
    </div>
    <div>
      <Button size="big" theme="plain">大按钮</Button>
      <Button theme="plain">普通</Button>
      <Button size="small" theme="plain">小按钮</Button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Button
} from "../lib/index";
export default {
  components: {
    Button
  }
}
</script>