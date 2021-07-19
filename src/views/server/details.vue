<template>
  <div class="details">
    <router-link to="/server/news"><svg-icon icon-class="return" />&nbsp;返回列表</router-link>
    <el-divider></el-divider>
    <div class="content" v-html="msg"></div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { search } from '@/api/user'

export default {
  setup() {
    let msg = ref('')
    const route = useRoute()
    const details = () => {
      search({ id: parseInt(route.params.id) }).then(res => {
        if (res.res === 0) {
          msg.value = res.data
        }
      })
    }
    onMounted(() => {
      details()
    })

    return {
      msg,
      details
    }
  },
}
</script>
<style lang="scss" scoped>
.details {
  min-height: 400px;
  a {
    color: $color333;
    font-size: 20px;
    &:hover {
      color:$mainColor;
      svg.svg-icon {
        color:$mainColor;
      }
    }
  }
  .content {
    background-image: linear-gradient(90deg,rgba(60,10,30,.04) 3%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 3%,transparent 0);
    background-size: 20px 20px;
    background-position: 50%;
  }
}
</style>