<script setup>
import { IconLogo } from '../icons'
import { HEADER_NAVIGATION_LINKS } from '../../api/constants'
</script>

<template>
  <header class="header">
    <div class="header_content">
      <router-link to="/" class="header_logo">
        <icon-logo icon-width="40" icon-height="40" icon-color="#89C445" />
      </router-link>

      <div class="header_nav">
        <router-link v-for="link in HEADER_NAVIGATION_LINKS" 
          :key="link"
          :to="link.path"
          class="link" >
          {{ link.text }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.header {
  width: 100%;
  padding: 0 15px;
  background: $bg-primary;
  font-family: 'Kanit', sans-serif;

  .header_content {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_nav {
      display: flex;
      gap: 30px;

      .link {
        color: $color-primary;
        font-size: 18px;
        font-weight: 300;

        &.active {
          color: $color-highlight;
          text-shadow: $text-shadow;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .header {
    padding: 0 10px;

    .header_content {

      .header_nav {
        gap: 10px;

        .link {
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 360px) {
  .header {
    .header_content {
      
      .header_nav {
        .link {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
