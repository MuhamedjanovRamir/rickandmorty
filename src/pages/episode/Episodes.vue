<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import AppTextDescription from '../../components/shared/AppTextDescription.vue'
import AppTextTitle from '../../components/shared/AppTextTitle.vue'
import AppList from '../../components/entities/AppList.vue'
import AppPagination from '../../components/features/AppPagination.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()

onMounted(() => store.dispatch('episode/loadAllEpisodes'))

const episodes = computed(() => store.state.episode.allEpisodes)
const episodesInfo = computed(() => store.state.episode.episodesInfo)

const goToPage = url => {
  store.dispatch('episode/loadPage', url)
  window.scrollTo({ top: 0 })
}

const loader = computed(() => store.state.episode.loader)
</script>


<template>
  <app-loader v-if="loader" />
  
  <div v-else class="episodes">
    <div class="episodes_wrapper">
      <app-text-title>
        Episodes
      </app-text-title>

      <ul class="episodes_list">
        <app-list v-for="episode in episodes" :key="episode.id"
          :item-id="episode.id"
          :item-name="episode.name"
          :item-description="episode['air_date']"
          item-type="episode"
        />
      </ul>

      <div class="episodes_pagination">
        <app-pagination 
          :page-info="episodesInfo"
          @next="goToPage"
          @prev="goToPage"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.episodes {
  padding: 30px 0;
  min-height: calc(-60px + 100vh);
  background-color: $bg-secondary;
  font-family: 'Kanit', sans-serif;

  .episodes_wrapper {
    max-width: 900px;
    padding: 0 15px;
    margin: 0 auto;

    .episodes_list {
      margin-top: 20px;
    }
  }
}

.episodes_pagination {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
