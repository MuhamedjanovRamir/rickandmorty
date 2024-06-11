<template>
  <div class="loader-container">
    <div class="loader-spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: $bg-primary;
}

.loader-spinner {
  width: 70px;
  height: 70px;
  border: 5px solid $bg-secondary;
  border-top: 5px solid $bg-highlight;
  border-radius: 50%;
  animation: spin .7s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>