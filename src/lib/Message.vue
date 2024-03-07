<template>
  <transition name="down" v-show="visible">
    <div class="li-message" :style="style[type]">
      <svg>
        <use :xlink:href="`#icon-${style[type].icon}`"></use>
      </svg>
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<script lang="ts" setup="props, context">
import { onMounted, ref } from "vue";
defineProps<{ type: "success" | "warning" | "error"; text: string }>();

const style = {
  success: {
    icon: 'successIcon',
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
  warning: {
    icon: 'warningIcon',
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    icon: 'errorIcon',
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
};
const visible = ref(false);
onMounted(() => {
  visible.value = true;
});
</script>

<style lang="scss" scoped>
.down {
  &-enter {
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
.li-message {
  position: fixed;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  top: 25px;
  padding: 6px 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  display: flex;
  align-items: center;
  svg{
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
}
</style>
