<template>
  <div class="main-header-box">
    <div :class="['header', isVisible ? 'visible' : '']">
      <el-dropdown class="hidden-sm-and-up" style="font-size: 50px;color: #fff;position: absolute;top: 5px;left: 10px;z-index:99">
        <i class="el-icon-s-fold"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item,index) in store.state.asyncRouter.routes" :key="index">
              <router-link :to="item.path" v-if="!item.hidden">{{$t(item.name)}}</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-row class="headerWrap" type="flex" justify="center">
        <el-col class="headLogo" :xs="10" :sm="10" :md="4" :lg="4" :xl="4">
          <a href="/" rel="home">
            <img src="../../../assets/images/logo.png" alt="">
          </a>
        </el-col>
        <el-col class="hidden-sm-and-down" style="max-width:1200px;width:100%" :md="{ span: 14, offset: 1}" :lg="{ span: 14, offset: 1}" :xl="{ span: 14, offset: 1}">
          <el-menu
            class="hidden-xs-only"
            :show-timeout="200"
            :default-active="activeMenu()"
            :collapse="isCollapse"
            background-color="#0b2f3d"
            text-color="#fff"
            active-text-color="#FF6D34"
            :unique-opened="true"
            mode="horizontal"
            router
          >
            <sidebar-item :routes="store.state.asyncRouter.routes"></sidebar-item>
          </el-menu>
        </el-col>
        <el-col class="header-tel hidden-sm-and-down" :md="5" :lg="5" :xl="5" v-if="!store.getters.username || store.getters.username === 'admin'">
          <router-link to="/login">登录</router-link>&nbsp;&nbsp;&nbsp;
          <router-link to="/register">注册</router-link>
        </el-col>
        <el-col class="header-tel hidden-sm-and-down" :md="5" :lg="5" :xl="5" v-else>
          <i class="userimg el-icon-user-solid"></i>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              {{activeusername}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="toUsers">个人中心</el-dropdown-item>
                <el-dropdown-item @click="loginout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
  </div>
</div>
</template>

<script>
import { ref , onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { getRoles } from '@/api/user'

export default {
  name: 'navbar',
  components: { SidebarItem },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    // 当前路由
    const activeMenu = () => {
      if (route.path.indexOf('/server/') !== -1 || route.path.indexOf('/details/') !== -1) {
        return '/server'
      } else {
        return route.path
      }
    }
    // 退出登录
    const loginout = () => {
      store.dispatch('user/LogoutResult').then(async() => {
        router.push({ path: '/login' })
      })
    }

    // 点击今日个人中心
    const toUsers = () => {
      router.push('/users')
    }

    // 菜单折叠
    const isCollapse = ref(false)

    // 获取当前用户
    const activeusername = ref('')
    const activeUser = () => {
      getRoles().then(res => {
        if (res.res === 0) {
          activeusername.value = res.data.username
        }
      })
    }

    // 鼠标滚动,添加class
    const isVisible = ref(true)
    const scrollFunc = (e) => {
      e = e || window.event;
      if (e.wheelDelta) { // 判断浏览器ie,谷歌滚轮事件
        if (e.wheelDelta > 0) { // 当滑轮向上滚动时
          isVisible.value = true
        } else if (e.wheelDelta < 0) {
          isVisible.value = false
        }
      } else if (e.detail) { // Firefox滚轮事件
        if (e.detail > 0) { // 当滑轮向上滚动时
          isVisible.value = true
        }else if(e.detail < 0){
          isVisible.value = false
        }
      }
    }

    onMounted(() => {
      activeUser()
      if (document.addEventListener) { // firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
      }
      window.onmousewheel = document.onmousewheel = scrollFunc; // ie google
    })
    return {
      store,
      route,
      activeMenu,
      loginout,
      toUsers,
      isCollapse,
      activeusername,
      isVisible
    }
  }
}
</script>
<style lang="scss">
.main-header-box {
  position: relative;
  height: 60px;
  .header {
    width: 100%;
    background: $bgblock;
    height: 60px;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    transform: translate3d(0,-100%,0);
    &.visible {
      transform: translateZ(0);
    }
    .headerWrap {
      padding: 0 20px;
      .header-tel {
        font-size: 16px;
        color: $colorfff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        a  {
          color: $colorfff;
        }
        i.userimg {
          width: 35px;
          height: 35px;
          font-size: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .el-dropdown {
          color: $colorfff;
          padding-left: 10px;
        }
      }
      .headLogo {
        text-align: left;
        a {
          display: block;
        }
      }
      .el-menu.el-menu--horizontal {
        border-bottom: none;
      }
    }
  }
}

</style>