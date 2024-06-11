<template>
  <span class="description">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.description {
  font-size: 16px;
  font-weight: 400;
  color: $color-secondary;
}

@media (max-width: 650px) {
  .description {
    font-size: 14px;
  } 
}
</style>
