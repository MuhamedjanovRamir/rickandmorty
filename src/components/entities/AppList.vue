<script setup>
import AppTextDescription from '../shared/AppTextDescription.vue'
import AppTextInformation from '../shared/AppTextInformation.vue'

const props = defineProps({
  itemType: String,
  itemId: Number,
  itemName: String,
  itemDescription: String
})

const { 
  itemType,
  itemId, 
  itemName, 
  itemDescription 
} = props

</script>

<template>
  <li>
    <router-link class="item-link" :to="`/${ itemType }/${ itemId }`">
      <div class="item-title">
        <span>{{ itemId }}</span>
        <app-text-information>{{ itemName }}</app-text-information>
      </div>
      <app-text-description class="ietm-description">{{ itemDescription }}</app-text-description>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.item-link {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;

  &:hover{
    background: $bg-primary;
  }

  .item-title {
    display: flex;
    gap: 8px;
    align-items: center;

    span {
      color: $color-highlight;
      text-shadow: $text-shadow;
      font-size: 18px;
    }
  }
}

@media (max-width: 650px) {
  .item-link {
    padding: 0 10px;

    .item-title {
      display: flex;
      gap: 8px;
      align-items: center;

      span {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 580px) {
  .item-link {
    padding: 0 5px;
  }
  .ietm-description {
    display: none;
  }
}
</style>
