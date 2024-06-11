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
    <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/>
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