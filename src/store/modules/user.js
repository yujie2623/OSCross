import { getRoles, logout, userLogin } from '@/api/user'
import Cookie from 'js-cookie'
const user = {
    namespaced: true,
    state:{
        username: Cookie.get('username'),
        roles: []
    },

    mutations:{
        SET_USERNAME:(state,username) =>{
          state.username = username
        },
        SET_ROLES: (state, roles) => {
          state.roles = roles
        }
    },

    actions:{
      // 登录
      login({commit}, loginform) {
        return new Promise((resolve, reject) => {
          userLogin(loginform).then(res => {
            if (res.res === 0){
              Cookie.set('username', loginform.username)
            }
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 0 普通用户 -1 未登录
      // 获取角色权限
      // 登录
      getRolesApi({commit}) {
        return new Promise((resolve, reject) => {
          getRoles().then(res => {
            const { roles, username } = res.data
            if (res.res === 0) {
              commit('SET_ROLES', [roles])
              commit('SET_USERNAME', username)
            }
            resolve(res.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      /* 用户登出 */
      LogoutResult({commit}) {
        return new Promise((resolve, reject) => {
          logout().then(res => {
            if (res.res === 0) {
              commit('SET_USERNAME','')
              commit('SET_ROLES','')
              Cookie.remove('username')
            }
            resolve(res)
          })
        })
      }
    },
}

export default user