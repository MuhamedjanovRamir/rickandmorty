<script setup>
import { computed } from 'vue'
import { getIdFromUrl } from '../../helpers'

import AppTextDescription from '../shared/AppTextDescription.vue'
import AppStatusIndicator from '../shared/AppStatusIndicator.vue'

const props = defineProps({
  characterName: String,
  characterStatus: String,
  characterSpecies: String,
  characterOrigin: Object,
  characterLocation: Object,
  characterImage: String,
  characterId: Number
})

const { 
  characterName, 
  characterStatus, 
  characterSpecies, 
  characterOrigin, 
  characterLocation, 
  characterImage,
  characterId
} = props

const characterOriginId = computed(() => getIdFromUrl(characterOrigin.url))
const characterLocationId = computed(() => getIdFromUrl(characterLocation.url))
</script>

<template>
  <article class="card">
    <div class="card_image">
      <img :src="characterImage">
    </div>

    <div class="card_info">
      <router-link :to="`/character/${characterId}`" class="card-link">
        <h2 class="card-title">
          {{ characterName }}
        </h2>
      </router-link>

      <div class="character-status">
        <app-status-indicator :status="characterStatus" />
        <span>{{ characterStatus }} - {{ characterSpecies }}</span>
      </div>

      <div class="location_wrapper">
        <div class="character-location">
          <app-text-description class="location-description">Last known location</app-text-description>
  
          <router-link :to="characterLocationId === null ? '/locations' : `/location/${characterLocationId}`" class="link">
            <p class="location-name">{{ characterLocation.name }}</p>
          </router-link>
        </div>
  
        <div class="character-location">
          <app-text-description class="location-description">First seen in</app-text-description>
  
          <router-link :to="characterOriginId === null ? '/locations' : `/location/${characterOriginId}`" class="link">
            <p class="location-name">{{ characterOrigin.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.card {
  width: 600px;
  height: 220px;
  background: $bg-gray;
  border-radius: 8px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  font-family: 'Kanit', sans-serif;

  .card_image {
    height: 100%;
    width: 220px;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  .card_info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px;

    .link {
      color: $color-primary;
      font-size: 16px;

      &:hover {
        color: $color-highlight;
        text-shadow: $text-shadow;
      }
    }

    .card-title {
      max-width: 350px;
      color: #f5f5f5;
      font-size: 22px;
      font-weight: 600;

      &:hover {
        color: $color-highlight;
        text-shadow: $text-shadow;
      }
    }

    .character-status {
      display: flex;
      gap: 7px;
      align-items: center;

      span {
        font-family: 'Kanit', sans-serif;
        color: $color-primary;
        font-size: 16px;
      }
    }
  }

  .character-location {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 650px) {
  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: max-content;

    .card_image {
      width: 100%;
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 200px;
        height: 200px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-radius: 50%;
      }
    }

    .card_info {
      align-items: center;
      padding: 0 30px 30px 30px;

      .link {
        font-size: 18px;
      }

      .card-title {
        max-width: 100%;
        font-size: 24px;
        margin-bottom: 10px;
      }

      .character-status {
        flex-direction: column-reverse;
        margin-bottom: 20px;

        span {
          font-size: 14px;
        }
      }
    }
    .character-location {
      flex-direction: column-reverse;
      align-items: center;
      gap: 8px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      .location-description {
        font-size: 14px;
      }

      .location-name {
        font-size: 16px;
      }
    }
  }
}
</style>
