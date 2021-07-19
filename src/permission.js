import router from "./router/index"
import store from './store/index'
import { ElMessage } from 'element-plus';
import Cookie from 'js-cookie'
// 进度条
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
NProgress.configure({showSpinner: false}) // 圈圈隐藏


router.beforeEach(async(to, from, next) => {
  const tokenName = Cookie.get('username')
  if (tokenName) {
    const hasRoles = store.getters.roles && store.getters.roles.length > 0
    if (hasRoles) {
      NProgress.start()
      next()
    } else {
      try {
        const { roles } = await store.dispatch('user/getRolesApi')
        const accessedRoutes = await store.dispatch('asyncRouter/generateRoutes', [roles])
        accessedRoutes.forEach((item) =>{
          router.addRoute(item)
        })
        next(to.path)
      } catch (error) {
        await store.dispatch('user/LogoutResult')
        ElMessage.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    await store.dispatch('asyncRouter/generateRoutes', [9])
    if (to.path === '/users') {
      next('/404')
    } else {
      NProgress.start()
      next()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})