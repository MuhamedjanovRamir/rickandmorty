<script setup>
import { useStore } from 'vuex'
import { getPageId } from '../../helpers'

import { IconArrow } from '../icons'

const store = useStore()
const emit = defineEmits(['next', 'prev'])

defineProps({
  pageInfo: Object,
})
</script>

<template>
  <div class="pagination">
    <button 
      :disabled="pageInfo.prev === null"  
      @click="emit('prev', pageInfo.prev)"
      :class="{ disabled: pageInfo.prev === null}"
      class="button prev">
      <icon-arrow class="arrow" icon-height="24" icon-width="24" icon-color="#f5f5f5"/>
    </button>
    
    <div class="progress">
      {{ getPageId(pageInfo.next) === null ? pageInfo.pages : getPageId(pageInfo.next) - 1 }} of {{ pageInfo.pages }}
    </div>

    <button 
      :disabled="pageInfo.next === null"
      @click="emit('next', pageInfo.next)"
      :class="{ disabled: pageInfo.next === null}"
      class="button next" 
      >
      <icon-arrow class="arrow" icon-height="24" icon-width="24" icon-color="#f5f5f5"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.pagination {
  display: flex;
  align-items: center;
  gap: 20px;
}

.button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: $bg-highlight;
  box-shadow: 0 0 10px #3DB44E;
  border: 1px solid $bg-highlight;
  transition: .2s ease;

  &.disabled {
    background: transparent;
    pointer-events: none;

    .arrow {
      fill: $color-highlight;
    }
  }

  &:hover {
    background-color: transparent;

    .arrow {
      fill: $color-highlight;
    }
  }

  &.prev { transform: rotate(90deg); }
  &.next { transform: rotate(-90deg); }
}

.progress {
  position: relative;
  height: 40px;
  padding: 0 15px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #f5f5f5;
  background: $bg-highlight;
  box-shadow: 0 0 10px #3DB44E;
}
</style>
