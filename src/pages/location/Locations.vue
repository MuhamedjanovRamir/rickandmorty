<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import AppTextDescription from '../../components/shared/AppTextDescription.vue'
import AppTextTitle from '../../components/shared/AppTextTitle.vue'
import AppList from '../../components/entities/AppList.vue'
import AppPagination from '../../components/features/AppPagination.vue'
import AppLoader from '../../components/layouts/AppLoader.vue'

const store = useStore()

onMounted(() => store.dispatch('location/loadAllLocations'))

const getLocations = computed(() => store.state.location.allLocations)
const getLocationsInfo = computed(() => store.state.location.locationsInfo)

const goToPage = url => {
  store.dispatch('location/loadPage', url)
  window.scrollTo({ top: 0 })
}

const loader = computed(() => store.state.location.loader)
</script>

<template>
  <app-loader v-if="loader" />
  <div v-else class="locations">
    <div class="locations_wrapper">
      <app-text-title>
        Locations
      </app-text-title>

      <ul class="locations_list">
        <app-list v-for="location in getLocations" :key="location.id"
          :item-id="location.id"
          :item-name="location.name"
          :item-description="location.type"
          item-type="location"
        ></app-list>
      </ul>

      <div class="locations_pagination">
        <app-pagination 
          :page-info="getLocationsInfo"
          @next="goToPage"
          @prev="goToPage"
        />
      </div>
    </div>  
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.locations {
  padding: 30px 0;
  min-height: calc(-60px + 100vh);
  background: $bg-secondary;
  font-family: 'Kanit', sans-serif;

  .locations_wrapper {
    max-width: 900px;
    padding: 0 15px;
    margin: 0 auto;
  }
}

.locations_list {
  margin-top: 20px;
}

.locations_pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
