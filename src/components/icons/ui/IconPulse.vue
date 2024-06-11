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
    <path d="M432 272a48.09 48.09 0 00-45.25 32h-39.22l-28.35-85.06a16 16 0 00-30.56.66l-44.51 155.76-52.33-314a16 16 0 00-31.3-1.25L99.51 304H48a16 16 0 000 32h64a16 16 0 0015.52-12.12l45.34-181.37 51.36 308.12A16 16 0 00239.1 464h.91a16 16 0 0015.37-11.6l49.8-174.28 15.64 46.94A16 16 0 00336 336h50.75A48 48 0 10432 272z"/>
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