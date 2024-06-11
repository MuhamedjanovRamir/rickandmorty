<script setup>
import { computed } from 'vue'
 
const props = defineProps({
  status: String
})
</script>


<template>
  <div class="status-indicator" :class="status"></div>
</template>

<style lang="scss" scoped>
.status-indicator {
  width: 9px;
  height: 9px;
  border-radius: 50%;

  &.Alive { background: #55cc44; }
  &.Dead { background: #d63d2e; }
  &.unknown { background: #9e9e9e; }
}
</style>
