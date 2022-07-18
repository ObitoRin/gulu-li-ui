<template>
  <h1>介绍</h1>
  <p>ObitoRin UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。</p>
  <p>
    这款组件库其实是我为了学习 Vue 3 而写的，包括你现在看到的这个官网也是我写的
    （响应式）
  </p>
  <p>
    本项目仅供学习，未发布到 npm 上。
    <a href="https://github.com/ObitoRin/gulu-li-ui" target="_blank"
      >查看源码</a
    >
  </p>
</template>

<script lang="ts">
export default {
  name: 'intro'
};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 16px;
  padding-bottom: 0.3em;
  font-weight: 600;
  line-height: 1.25;
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
}
p {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
  }
  a {
    color: rgb(157, 191, 115);
  }
}
</style>
