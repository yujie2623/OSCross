<template>
  <div class="server">
    <div class="serverPage_banner productPage_banner">
      <h2 class="productBannerTit">OSCross 服务中心</h2>
    </div>
    <ul class="headMode">
      <li :class="{ activeColor: (route.path === '/server/news' || route.path.indexOf('details') === 1)}">
        <router-link to="/server/news">常见问题</router-link>
      </li>
      <el-divider direction="vertical"></el-divider>
      <li :class="{ activeColor: route.path === '/server/remark'}">
        <router-link to="/server/remark">在线留言</router-link>
      </li>
    </ul>
    <el-row class="main">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <server-main />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ServerMain from './server/main.vue'
import { useRoute } from 'vue-router'
export default {
  components: { ServerMain },
  setup() {
    const route = useRoute()

    return {
      route
    }
  },
}
</script>
<style lang="scss" scoped>
.server {
  flex-grow: 6;
  background: $colorfff;
  .main { max-width: $maxwidth; width: 100%; margin: 0 auto; padding: 50px;}
  .serverPage_banner {
    background: url("../../assets/images/server.png") no-repeat center;
  }
  .headMode {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 64px;
    height: 64px;
    font-weight: 300;
    border: 1px solid #dadada;
    li {
      width: 100px;
      text-align: center;
      position: relative;
      a {
        color: $color333;
      }
      &.activeColor {
        a {
          color: $mainColor;
        }
        &::before{
          display: block;
          content: '';
          width: 100%;
          height: 2px;
          background: $mainColor;
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
}
</style>