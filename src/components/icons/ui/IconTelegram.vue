<script setup>

const props = defineProps({
  iconColor: String,
  iconWidth: String,
  iconHeight: String,
})

const { 
  iconColor = 'red', 
  iconWidth = '16', 
  iconHeight = '16', 
} = props

</script>

<template>
  <svg
    :width="iconWidth"
    :height="iconHeight"
    class="icon"
    viewBox="0 0 512 512"
  >
    <path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/>
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  fill: v-bind(iconColor);

  &:hover {
    fill: #89C445;
  } 
}
</style>
