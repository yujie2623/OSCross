<template>
  <section class="app-main">
    <router-view></router-view>
    <footer-page></footer-page>
  </section>
</template>
<script>
import footerPage from './footer.vue'
export default {
  components: { footerPage }
}
</script>
<style scoped>
.app-main {
  min-height: 100vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
