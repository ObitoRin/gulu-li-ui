<template>
  <div>
    导航栏 | <router-link to="/">首页</router-link> |
    <router-link to="/xxx">Rin2</router-link>
  </div>
  <!-- 在App.vue中展示路由对应的组件 -->
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>
