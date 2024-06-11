<template>
  <p class="text-information">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.text-information {
  font-size: 22px;
  color: $color-primary;
}

@media (max-width: 650px) {
  .text-information {
    font-size: 18px;
  }
}
</style>
