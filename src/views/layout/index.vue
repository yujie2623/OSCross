<template>
  <navbar />
  <app-main />
</template>
<script>
import { navbar, AppMain } from './components'
export default {
  components: { navbar, AppMain },
  name: 'layout',
}
</script>