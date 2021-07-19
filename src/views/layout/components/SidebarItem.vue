<template>
  <template v-for="(item,index) in routes" :key="index">
      <!--当路由只有一个子路由时-->
      <el-menu-item :index="item.path" v-if="!item.hidden">{{$t(item.name)}}</el-menu-item>
  </template>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    parent: {
      type: String
    }
  },
  setup(props) {
    const routes = props.routes
    const hasOneShowingChildren = (children) => {
      console.log(children)
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
    return {
      routes,
      hasOneShowingChildren
    }
  },
}
</script>
