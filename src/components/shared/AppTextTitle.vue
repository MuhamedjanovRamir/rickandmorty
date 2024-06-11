<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.title {
  text-align: center;
  font-size: 48px;
  color: $color-highlight;
  text-shadow: $text-shadow;
}

@media (max-width: 650px) {
  .title {
    font-size: 28px;
  }
}
</style>
