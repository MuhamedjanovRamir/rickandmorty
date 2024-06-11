<script setup>
import TheHeader from './components/widgets/TheHeader.vue'
import TheFooter from './components/widgets/TheFooter.vue'
</script>


<template>
  <the-header></the-header>

  <main>
    <router-view></router-view>
  </main>
  
  <the-footer></the-footer>
</template>
