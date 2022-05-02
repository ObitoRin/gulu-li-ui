<template>
  <!-- Vue 会把传给当前组件的所有事件默认传给组件的最外层根元素(button)上，不管这个元素是什么 -->
  <button>
    <slot />
    <!-- 当 Button 组件渲染时，slot 会被引用组件时的内容替换 -->
  </button>
</template>
