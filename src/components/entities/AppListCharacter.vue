<script setup>
import AppTextDescription from '../shared/AppTextDescription.vue'
import AppTextInformation from '../shared/AppTextInformation.vue'

const props = defineProps ({
  itemId: Number,
  itemImage: String,
  itemName: String
}) 

const {
  itemId,
  itemImage,
  itemName
} = props

</script>

<template>
  <li>
    <router-link class="item" :to="`/character/${ itemId }`">
      <div class="item_info">
        <div class="item_info-image">
          <img :src="itemImage">
        </div>

        <app-text-information>
          {{ itemName }}
        </app-text-information>
      </div>

      <app-text-description>
        {{ itemId }}
      </app-text-description>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  &:hover {
    background: $bg-primary;
  }

  .item_info {
    display: flex;
    align-items: center;
    gap: 10px;

    .item_info-image {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
