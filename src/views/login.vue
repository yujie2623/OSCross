<template>
  <div class="loginBg">
    <navheader>
      <template v-slot:title>登录</template>
    </navheader>
    <div class="userLogin">
      <div class="main">
        <el-tabs v-model="loginType" class="headtit" @keydown.enter="login(loginType)">
          <el-tab-pane label="手机登录" name="tel">
            <el-row class="txt">
              <el-col>
                <el-input v-model="form.telMode.phone" placeholder="请输入手机号码">
                  <template #prepend><i class="el-icon-phone"></i></template>
                </el-input>
              </el-col>
            </el-row>
            <el-row class="txt">
              <el-col>
                <el-input v-model.number="form.telMode.code" placeholder="请输入页面验证码">
                  <template #append>
                    <el-button @click="getCode" :disabled="isclickCode" v-preventMoreClick>
                      <span v-show="isclickCode">{{num}}s后重新获取</span>
                      <span v-show="!isclickCode">获取验证码</span>
                    </el-button>
                  </template>
                </el-input>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="密码登录" name="pwd">
            <el-row class="txt">
              <el-col>
                <el-input v-model="form.pwMode.username" placeholder="请输入用户名">
                  <template #prepend><i class="el-icon-user"></i></template>
                </el-input>
              </el-col>
            </el-row>
            <el-row class="txt">
              <el-col>
                <el-input v-model="form.pwMode.password" type="password" placeholder="请输入登录密码">
                  <template #prepend><i class="el-icon-view"></i></template>
                </el-input>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        <el-button class="loginbtn" type="primary" @click="login(loginType)" v-preventMoreClick>登录</el-button>
        <p class="register"><router-link to="/register">免费注册</router-link></p>
      </div>
    </div>
    <div class="footer">
      Copyright © {{new Date().getFullYear()}} 安徽淝软信息科技有限公司 皖ICP备2021005601号-3
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { vcode } from '@/api/user'
import { reactive, ref  } from 'vue'
import { useStore } from 'vuex';
import { phone, isFourNum } from '../utils/validator'
import { useRouter} from 'vue-router'
import navheader from './components/loginHeader.vue'

export default {
  components: { navheader },
  setup() {
    const form = reactive({
      pwMode: {
        username: '',
        password: '',
        type: 0
      },
      telMode: {
        phone: '',
        code: '',
        type: 1
      }
    })
    const store = useStore()
    const router = useRouter()
    // 登录注册
    const login = (loginType) => {
      if (loginType === 'tel') {
        if (form.telMode.phone === '' || !phone(form.telMode.phone)) {
          return ElMessage.error('手机号码不正确')
        } else if (form.telMode.code === '' || !isFourNum(form.telMode.code)) {
          return ElMessage.error('验证码不正确')
        }
      } else {
        if(form.pwMode.username === '') {
          return ElMessage.error('用户名不正确')
        } else if(form.pwMode.password === '') {
          return ElMessage.error('密码不正确')
        }
      }
      store.dispatch('user/login', loginType === 'tel' ? form.telMode : form.pwMode).then(async res => {
        if (res.res === 0) {
          await router.push('/users')
        } else {
          ElMessage.error(res.msg)
        }
      })
    }
    // 验证码
    const isclickCode = ref(false)
    // 验证码倒计时
    const num = ref(60)
    const timer = () => {
      const stopTimer = setInterval(() => {
        num.value --
        if (num.value === 0) {
          clearInterval(stopTimer)
          isclickCode.value = false
          num.value = 60
        }
      }, 1000)
    }
    // 获取验证码
    const getCode = () => {
      if (form.telMode.phone === '' || !phone(form.telMode.phone)) {
        return ElMessage.error('手机号码不正确')
      }
      vcode({ phone: form.telMode.phone }).then(res => {
        if (res.res === 0) {
          isclickCode.value = true
          timer()
        } else {
          ElMessage.error(res.msg)
        }
      })
    }
    // tab
    const loginType = ref('tel')
    return {
      form,
      login,
      getCode,
      isclickCode,
      num,
      loginType
    }
  },
}
</script>
<style lang="scss">
.headtit {
  .el-tabs__item.is-active {
    color: $mainColor!important;
  }
  .el-tabs__active-bar {
    background-color: $mainColor!important;
  }
  .el-tabs__item:hover {
    color: $mainColor!important;
  }
}
</style>
<style lang="scss" scoped>
.loginBg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to top, rgb(255, 241, 235) 0%, rgb(172, 224, 249) 100%);
}
.userNav {
  flex-grow: 1;
}
.userLogin {
  width: 100%;
  flex-grow: 10;
  padding-top: 10vh;
  .main {
    position:relative;
    width: 500px;
    height: auto;
    margin: 0 auto;
    padding: 20px 40px;
    background: #fff;
    border-radius: 5px;
    box-shadow:0 1px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
  }
  p.register {
    text-align: right;
    a {
      color: $color333;
      display: inline-block;
      line-height: 36px;
    }
  }
  .txt{
    line-height:40px;
    height:40px;
    margin-top:30px;
    color: $color333;
  }

  .loginbtn {
    width: 100%;
    margin-top: 30px;
  }
}
.footer {
  width: 100%;
  height: auto;
  text-align: center;
  flex-grow: 1;
}
</style>