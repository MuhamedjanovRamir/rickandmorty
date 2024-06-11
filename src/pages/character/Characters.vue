<script setup>
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'

import TheSidebar from '../../components/widgets/TheSidebar.vue'
import AppCharacterCard from '../../components/entities/AppCharacterCard.vue'
import AppPagination from '../../components/features/AppPagination.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()

onMounted(() => store.dispatch('character/loadAllCharacters'))

const loadFilteredCharacters = params => store.dispatch('character/loadFilteredCharacters', params)
const loadAllCharacters = () => store.dispatch('character/loadAllCharacters')
const loadByName = name => store.dispatch('character/loadByName', name)

const errorMessage = computed(() => store.state.character.searchError)
const charactersList = computed(() => store.state.character.characters)
const pageInfo = computed(() => store.state.character.info)

const goToPage = (url) => {
  store.dispatch('character/loadPage', url)
  window.scrollTo({ top: 0 })
}

const loader = computed(() => store.state.character.loader)
</script>

<template>
  <app-loader v-if="loader" />
  <div v-else class="characters">
    <the-sidebar 
      @load-filtered="loadFilteredCharacters" 
      @load-all="loadAllCharacters"
      @submit="loadByName">
    </the-sidebar>

    <div class="characters_content">
      <div v-if="errorMessage">
        <h1 class="characters_title">
          Not found <span>{{ errorMessage }}</span>
        </h1>
        <div class="error_image">
          <img src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png">
        </div>
      </div>

      <div class="characters_cards">
        <app-character-card 
          v-for="character in charactersList"
          :key="character.id"
          :character-id="character.id"
          :character-name="character.name"
          :character-status="character.status"
          :character-species="character.species"
          :character-location="character.location"
          :character-origin="character.origin"
          :character-image="character.image"
        ></app-character-card>
      </div>

      <div class="characters_pagination">
        <app-pagination
          v-if="!errorMessage"
          :page-info="pageInfo"
          @next="goToPage"
          @prev="goToPage"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.characters {
  display: flex;
}

.characters_content {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(-60px + 100vh);
  flex-grow: 1;
  background: #272b33;
}

.error_image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.characters_title {
  font-size: 48px;
  font-family: 'Kanit', sans-serif;
  color: #f5f5f5;
  text-align: center;
  padding: 30px 0;

  span {
    font-size: 38px;
    color: #89C445;
    text-shadow:0 0 10px #3DB44E;
  }
}

.characters_cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.characters_pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

@media (max-width: 1500px) {
  .characters {
    display: flex;
    overflow: hidden;
  }

  .characters_content {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(-60px + 100vh);
    flex-grow: 1;
    background: #272b33;
  }

  .error_image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .characters_title {
    font-size: 48px;
    font-family: 'Kanit', sans-serif;
    color: #f5f5f5;
    text-align: center;
    padding: 30px 0;

    span {
      font-size: 38px;
      color: #89C445;
      text-shadow:0 0 10px #3DB44E;
    }
  }

  .characters_cards {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .characters_pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>