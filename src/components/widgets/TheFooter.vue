<script setup>
import { FOOTER_LINKS } from '../../api/constants'
</script>

<template>
  <footer class="footer">
    <div class="footer_content">
      <ul class="footer_socials">
        <li v-for="link in FOOTER_LINKS" :key="link">
          <a :href="link.url" target="_blunk">
            <component :is="link.icon"
              icon-width="24"
              icon-height="24"
              icon-color="#9e9e9e"
            />
          </a>
        </li>
      </ul>

      <div class="footer_author">
        <span>❮❯ by <a href="https://t.me/ddt_2b">Ramir Muhamedjanov</a> 2024</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.footer {
  padding: 80px 15px;
  background: $bg-primary;

  .footer_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .footer_socials {
      display: flex;
      gap: 20px;
    }

    .footer_author {
      font-family: 'Kanit', sans-serif;
      color: $color-secondary;
      font-weight: 300;

      a {
        position: relative;
        color: $color-primary;
        font-weight: 600;
        transition: .2s ease;

        &:hover {
          color: $color-highlight;
          text-shadow: $text-shadow;
        }

        &:hover::before {
          height: 0;
        }

        &::before {
          position: absolute;
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background: #89C445;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .footer {
    padding: 40px 15px;
  }
}
</style>
