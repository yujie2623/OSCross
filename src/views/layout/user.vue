<template>
<div class="usercenter">
  <app-main />
</div>
</template>
<script>
import { AppMain } from './components'
export default {
  name: 'user',
  components: { AppMain }
}
</script>
<style lang="scss" scoped>
.usercenter {
  .app-main {
    padding-top: 0;
  }
}
</style>