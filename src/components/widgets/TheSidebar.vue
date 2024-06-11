<script setup>
import { ref, computed } from 'vue'
import { ACCORDIONS } from '../../api/constants'
import { IconArrow } from '../../components/icons'

import AppButton from '../shared/AppButton.vue'
import AppAccordion from './AppAccordion.vue'

const emit = defineEmits([
  'loadFiltered', 
  'loadAll', 
  'submit'
])

const activeAccordion = ref(null)
const closeAccordion = () => activeAccordion.value = null
const toggleAccordion = (id) => {
  const isOpen = activeAccordion.value === id

  isOpen 
    ? activeAccordion.value = null 
    : activeAccordion.value = id
}

const filteredBy = ref('all')
const loadBy = params => {
  emit('loadFiltered', params)
  filteredBy.value = `${params.param}/${params.value}`
}
const loadAll = () => {
  emit('loadAll')
  filteredBy.value = 'all'
}

const searchValue = ref('')
const trimSearchValue = computed(() => searchValue.value.trim())
const submit = () => {
  if (trimSearchValue.value) {
    emit('submit', searchValue.value)
    searchValue.value = ''
  }
}

const isHide = ref(true)
const toggleSidebar = () => isHide.value = !isHide.value
const hideSidebar = () => isHide.value = true
</script>

<template>
  <aside class="sidebar" :class="{ open: !isHide }">
    <div 
      @click="toggleSidebar"
      class="sidebar_button">
      <icon-arrow class="sidebar_button-icon" icon-color="#f5f5f5" icon-height="22" icon-width="22"></icon-arrow>
    </div>

    <form class="form" @submit.prevent="submit">
      <h2 class="sidebar_title">Search</h2>
    
      <input 
        type="text"
        class="input"
        v-model="searchValue"
        placeholder="Enter character's name..."
      >

      <div v-if="trimSearchValue" class="button">
        <app-button type="submit">
          Search
        </app-button>
      </div>
    </form>

    <div class="filter">
      <h2 class="sidebar_title">Filtered by <span>{{ filteredBy }}</span></h2>

      <app-accordion
        v-for="accordion in ACCORDIONS"
        class="accordion"
        :key="accordion.id"
        :title="accordion.title"
        :icon="accordion.icon"
        :options="accordion.options"
        :accordion-id="accordion.id"
        :isOpen="activeAccordion === accordion.id"
        :class="{open: activeAccordion === accordion.id}"
        @load="loadBy"
        @toggle="toggleAccordion"
      />

      <div v-if="filteredBy !== 'all'" class="load_all" >
        <app-button @click="loadAll">
          Load all
        </app-button>
      </div>
    </div>
  </aside>

  <div v-if="!isHide" @click="hideSidebar" class="overlay"></div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.sidebar {
  position: sticky;
  top: 0px;
  padding-top: 60px;
  width: 300px;
  height: 100vh;
  min-width: 260px;
  background: $bg-primary;
  font-family: 'Kanit', sans-serif;
  padding: 30px 0px;

  .sidebar_button {
    display: none;
  }

  .sidebar_title {
    font-size: 22px;
    margin-bottom: 10px;
    color: $color-secondary;

    span {
      color: $color-highlight;
      text-shadow: $text-shadow;
      font-size: 16px;
    }
  }
}

.form {
  padding: 0 10px 30px 10px;
  border-bottom: 1px solid #333333;

  .input {
    position: relative;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid #272b33;
    color: $color-primary;
    background: $bg-secondary;
    padding: 0 15px;
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
}

.filter {
  padding: 30px 0px;

  .load_all {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sidebar_title {
    padding-left: 10px;
  }
}

@media (max-width: 1500px) {
  .sidebar {
    width: 280px;
    position: fixed;
    left: -280px;
    top: 0px;
    z-index: 12;
    transition: .2s ease;

    &.open {
      left: 0;
    }

    &.open {
      .sidebar_button {

        .sidebar_button-icon {transform: rotate(90deg);}
      }
    }

    .sidebar_button {
      display: block;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      width: 26px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      top: 120px;
      right: -26px;
      background: $bg-highlight;

      .sidebar_button-icon {
        transform: rotate(-90deg);

        &:hover {
          fill: #f5f5f5;
        }
      }
    }
  }

  .overlay {
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #202329c2;
    z-index: 11;
    top: 0;
    left: 0;
  }
}
</style>
