<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.markdown-body a {
  color: rgb(157, 191, 115) !important;
}
</style>
