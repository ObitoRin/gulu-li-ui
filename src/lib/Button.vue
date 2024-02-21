<template>
  <button
    class="li-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="li-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  theme?: "button" | "text" | "link";
  size?: "normal" | "big" | "small";
  level?: "normal" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  loading?: boolean;
}>();
const { theme, size, level } = props;

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
const classes = computed(() => {
  return {
    [`li-theme-${theme}`]: theme,
    [`li-size-${size}`]: size,
    [`li-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #f56c6c;
$green: #67c23a;
$yellow: #e6a23c;
$grey: #909399;

@mixin level-color($color) {
  background: $color;
  border-color: $color;
  color: white;
  &:hover,
  &:focus {
    background: darken($color, 10%);
    border-color: darken($color, 10%);
  }
}
@mixin link-level-color($color) {
  background-color: transparent;
  border-color: transparent;
  color: $color;
  &:hover,
  &:focus {
    color: lighten($color, 10%);
  }
}

.li-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $green;
    border-color: $green;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.li-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;
    &:hover,
    &:focus {
      color: lighten($green, 10%);
    }
  }
  &.li-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.li-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.li-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.li-level-normal {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    color: #333;
    &:hover,
    &:focus {
      background: darken(#f2f2f2, 10%);
      border-color: darken(#f2f2f2, 10%);
    }
  }
  &.li-level-primary {
    @include level-color($green);
  }
  &.li-level-success {
    @include level-color($blue);
  }
  &.li-level-warning {
    @include level-color($yellow);
  }
  &.li-level-danger {
    @include level-color($red);
  }
  &.li-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.li-theme-link,
  &.li-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  &.li-theme-link.li-level-normal{
    @include link-level-color(#333);
  }
  &.li-theme-link.li-level-primary{
    @include link-level-color($green);
  }
  &.li-theme-link.li-level-success{
    @include link-level-color($blue);
  }
  &.li-theme-link.li-level-warning{
    @include link-level-color($yellow);
  }
  &.li-theme-link.li-level-danger{
    @include link-level-color($red);
  }
  > .li-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $green $green $green transparent;
    border-style: solid;
    border-width: 2px;
    animation: li-spin 1s infinite linear;
  }
  @keyframes li-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
