<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { getIdFromUrl } from '../../helpers'

import AppTextDescription from '../../components/shared/AppTextDescription.vue'
import AppTextInformation from '../../components/shared/AppTextInformation.vue'
import AppTextTitle from '../../components/shared/AppTextTitle.vue'
import AppStatusIndicator from '../../components/shared/AppStatusIndicator.vue'
import AppList from '../../components/entities/AppList.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()
const route = useRoute()

onMounted(() => {
  store.dispatch('character/loadSingleCharacter', route.params['id'])
  window.scrollTo({ top: 0 })
})

onBeforeUnmount(() => store.commit('character/CLEAR_EPISODES'))

const getCharacterInfo = computed(() => store.state.character.singleCharacter)

const getLocationInfo = computed(() => store.state.character.locationInfo)
const locationId = computed(() => getIdFromUrl(getLocationInfo.value.url))

const getOriginInfo = computed(() => store.state.character.originInfo)
const originId = computed(() => getIdFromUrl(getOriginInfo.value.url))

const getEpisodes = computed(() => store.state.character.episodes)

const loader = computed(() => store.state.character.loader)
</script>

<template> 
  <app-loader v-if="loader" />

  <div v-else class="profile">
    <div class="profile_wrapper">
      <div class="profile_image">
        <img :src="getCharacterInfo.image">
      </div>

      <app-text-title class="profile_name">
        {{ getCharacterInfo.name }}
      </app-text-title>

      <div class="profile_status">
        <app-text-information>{{ getCharacterInfo.status }}</app-text-information>
        <app-status-indicator :status="getCharacterInfo.status" />
      </div>

      <div class="profile_info">
        <div class="profile_info-block">
          <app-text-information>{{ getCharacterInfo.gender }}</app-text-information>
          <app-text-description>gender</app-text-description>
        </div>
        <div class="profile_info-block">
          <app-text-information>{{ getCharacterInfo.species }}</app-text-information>
          <app-text-description>species</app-text-description>
        </div>
      </div>

      <div class="profile_location">
        <div class="profile_location-block">
          <app-text-description>First seen location</app-text-description>
          <router-link :to="originId === null ? '/locations' : `/location/${ originId }`">
            <app-text-information class="location">{{ getOriginInfo.name }}</app-text-information>
          </router-link>
        </div>
        <div class="profile_location-block">
          <app-text-description>Last seen location</app-text-description>          
          <router-link :to="locationId === null ? '/locations' : `/location/${ locationId }`">
            <app-text-information class="location">{{ getLocationInfo.name }}</app-text-information>
          </router-link>
        </div>
      </div>

      <div class="profile_episodes">
        <app-text-title class="episodes_title">
          Episodes
        </app-text-title>

        <ul class="profile_episodes-list">
          <app-list v-for="episode in getEpisodes" :key="episode.id"
            item-type="episode"
            :item-id="episode.id"
            :item-name="episode.name"
            :item-description="episode['air_date']"
          ></app-list>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.profile {
  min-height: calc(-60px + 100vh);
  background: $bg-secondary;

  .profile_wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px 15px;
  }
}

.profile_image {
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}

.profile_name {
  margin-top: 20px;
}

.profile_status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 22px;
  color: $color-primary;
  text-align: center;
}

.profile_info {
  position: relative;
  margin-top: 20px;
  display: flex;

  .profile_info-block {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.profile_location {
  margin-top: 20px;
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .profile_location-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .location:hover {
      color: $color-highlight;
      text-shadow: $text-shadow;
    }
  }
}

.profile_episodes {
  margin-top: 20px;

  .episodes_title {
    margin-bottom: 20px;
  }
}

@media (max-width: 650px) {
  .profile {
    min-height: calc(-60px + 100vh);
    background: $bg-secondary;

    .profile_wrapper {
      padding: 30px 10px;
    }
  }
}

@media (max-width: 580px) {

}
</style>
