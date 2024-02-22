<template>
  <div class="li-tabs">
    <div class="li-tabs-nav" ref="container">
      <div
        class="li-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el: HTMLDivElement) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="li-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="li-tabs-content">
      <component :is="currentContent" :key="currentContent.props.title" />
    </div>
  </div>
</template>
<script lang="ts" setup="props, context">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, watchEffect, useSlots } from "vue";
import type { Component } from "vue";

const props = defineProps<{ selected: string }>();
const emit = defineEmits<{
  (e: "update:selected", title: string): void;
}>();
const selectedItem = ref<HTMLDivElement>(null); // 当前选中的导航
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null); // 导航容器 用于计算left

onMounted(() => {
  watchEffect(
    () => {
      // element.getBoundingClientRect 获取元素大小、相对窗口的位置
      const { width, left: navLeft } =
        selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      const { left: containerLeft } = container.value.getBoundingClientRect();
      const left = navLeft - containerLeft;
      indicator.value.style.left = left + "px";
    },
    { flush: "post" }
  );
});
const slots = useSlots();
const defaults = slots.default();
defaults.forEach((tag) => {
  if ((tag.type as Component).name !== Tab.name) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});

const currentContent = computed(() => {
  return defaults.find((tag) => tag.props.title === props.selected);
});

const titles = defaults.map((tag) => tag.props.title);

const select = (title: string) => {
  emit("update:selected", title);
};
</script>
<style lang="scss">
$blue: #9dbf73;
$color: #333;
$border-color: #d9d9d9;

.li-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 50px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
