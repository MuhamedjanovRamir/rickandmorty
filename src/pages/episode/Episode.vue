<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed } from 'vue'

import AppTextDescription from '../../components/shared/AppTextDescription.vue'
import AppTextTitle from '../../components/shared/AppTextTitle.vue'
import AppListCharacter from '../../components/entities/AppListCharacter.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()
const route = useRoute()

onMounted(() => {
  store.dispatch('episode/loadSingleEpisode', route.params.id)
  window.scrollTo({ top: 0 })  
})

onBeforeUnmount(() => store.commit('episode/CLEAR_SINGLE_EPISODE'))

const getEpisode = computed(() => store.state.episode.singleEpisode)
const getCharacters = computed(() => store.state.episode.singleEpisodeCharacters)

const loader = computed(() => store.state.episode.loader)
</script>

<template>
  <app-loader v-if="loader" />
  <div v-else class="episode">
    <div class="episode_wrapper">
      <div class="episode_title">
        <app-text-title>{{ getEpisode.name }}</app-text-title>
        <app-text-description>{{ getEpisode['air_date'] }}</app-text-description>
      </div>

      <div class="episode_characters">
        <app-text-title>Characters</app-text-title>
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
.episode {
  background: $bg-secondary;
  min-height: 100vh;

  .episode_wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px 0px;
  }
}

.episode_title {
  text-align: center;
}

.episode_characters {
  padding-top: 20px;

  ul {
    margin-top: 20px;
  }
}
</style>
