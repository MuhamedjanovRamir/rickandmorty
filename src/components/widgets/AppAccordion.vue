<script setup>
import AppIcon from '../icons/ui/AppIcon.vue'
import { IconArrow } from '../icons'

const emit = defineEmits([
  'load', 
  'toggle'
])

const props = defineProps({
  title: String,
  icon: Object,
  options: Array,
  accordionId: Number,
  isOpen: Boolean
})

const { 
  title, 
  icon, 
  options, 
  accordionId, 
  isOpen 
} = props

const loadByOption = (params, element) => emit('load', params)
const toggleAccordion = (id) => emit('toggle', id)
</script>


<template>
  <div class="accordion">
    <div class="accordion_title" @click="toggleAccordion(accordionId)">
      <h3>
        <component :is="icon" icon-color="#f5f5f5"/> {{ title }}
      </h3>
      <icon-arrow class="arrow" icon-color="#f5f5f5" />
    </div>

    <ul class="accordion_options">
      <li v-for="option in options"
        :key="option"
        @click="loadByOption({ param: title, value: option })"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.accordion {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  .accordion_title {
    height: 44px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: $bg-secondary;
    }

    .arrow {
      transition: .2s ease;
    }

    h3 {
      font-size: 18px;
      font-family: 'Kanit', sans-serif;
      color: $color-primary;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  .accordion_options {
    display: none;

    li {
      padding-left: 46px;
      font-family: 'Kanit', sans-serif;
      font-size: 16px;
      color: $color-primary;
      height: 34px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: $bg-secondary;
      }
    }
  }
}

.accordion.open {
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-right: 3px solid #89C445;

  .icon {
    fill: $color-highlight;
  }

  .accordion_title {
    h3 {
      color: $color-highlight;
      text-shadow: $text-shadow;
    }

    padding: 0 7px 0 10px;
    background: $bg-secondary;
    &:hover {
      background: $bg-primary;
    }

    .arrow {
      transform: rotate(180deg);
    }
  }

  .accordion_options {
    display: block;
    background: $bg-secondary;

    li:hover {
      background: $bg-primary;
    }
  }
}
</style>
