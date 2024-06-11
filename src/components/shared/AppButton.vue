<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.button {
  font-size: 18px;
  width: 80%;
  font-family: 'Kanit', sans-serif;
  color: $color-primary;
  background: transparent;
  background: #89C445;
  box-shadow: 0 0 10px #3DB44E;
  padding: 5px 0;
  border-radius: 18px;
}
</style>
