<script setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import AppTextDescription from '../../components/shared/AppTextDescription.vue'
import AppTextTitle from '../../components/shared/AppTextTitle.vue'
import AppTextInformation from '../../components/shared/AppTextInformation.vue'
import AppListCharacter from '../../components/entities/AppListCharacter.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()
const route = useRoute()

onMounted(() => {
  store.dispatch('location/loadSingleLocation', route.params.id)
  window.scrollTo({ top: 0 })
})

const getLocation = computed(() => store.state.location.singleLocation)
const getCharacters = computed(() => store.state.location.singleLocationCharacters)

const loader = computed(() => store.state.location.loader)
</script>

<template>
  <app-loader v-if="loader" />

  <div class="location">
    <div class="location_wrapper">
      <app-text-title>{{ getLocation.name }}</app-text-title>
      <div class="location_info">
        <div class="location_info-block">
          <app-text-information>{{ getLocation.dimension }}</app-text-information>
          <app-text-description>dimension</app-text-description>
        </div>
        <div class="location_info-block">
          <app-text-information>{{ getLocation.type }}</app-text-information>
          <app-text-description>type</app-text-description>
        </div>
      </div>

      <div class="residents">
        <app-text-title>
          Residents
        </app-text-title>
        <ul>
          <app-list-character v-for="character in getCharacters" :key="character.id"
            :itemId="character.id"
            :itemName="character.name"
            :itemImage="character.image"
          ></app-list-character>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.location {
  padding: 30px 0;
  min-height: calc(-60px + 100vh);
  background: $bg-secondary;
  font-family: 'Kanit', sans-serif;
  
  .location_wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
}

.location_info {
  margin-top: 40px;
  display: flex;
  align-items: center;

  .location_info-block {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}

.residents {
  margin-top: 20px;
  ul {
    margin-top: 20px;
  }
}
</style>
