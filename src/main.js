import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import store from './store'
// import '@/assets/theme/index.css'
import './permission.js'
import '@/assets/style/index.scss'
import '@/assets/style/element-variables.scss'
// 频繁点击指令
import preventMoreClick from './derective/multClick'
// 隐藏元素css
import 'element-plus/lib/theme-chalk/display.css';
// 国际化
import i18n from './i18n'
import 'animate.css'
// svg
import 'vite-plugin-svg-icons/register';
import svgIcon from '@/components/svgIcon.vue'

const app = createApp(App)

app.directive('preventMoreClick', preventMoreClick)

app.component('svg-icon', svgIcon)
app.use(router)
// 要记得使用这个插件.
app.use(i18n)
app.use(ElementPlus, {
  i18n: i18n.global.t,
})

app.use(store)
app.mount('#app')
