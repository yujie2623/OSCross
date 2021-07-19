<template>
<div class="loginBg">
    <navheader>
      <template v-slot:title>注册</template>
    </navheader>
    <div class="userLogin" @keydown.enter="rergiter">
      <div class="main">
        <div class="headtitle">注册</div>
        <el-row class="txt">
            <el-col>
              <el-input v-model="form.username" placeholder="请输入用户名">
                <template #prepend><i class="el-icon-user"></i></template>
              </el-input>
            </el-col>
        </el-row>
        <el-row class="txt">
            <el-col>
              <el-input v-model="form.password" type="password" placeholder="请输入登录密码">
                <template #prepend><i class="el-icon-view"></i></template>
              </el-input>
            </el-col>
        </el-row>
        <el-row class="txt">
            <el-col>
              <el-input v-model="form.agin_password" type="password" placeholder="请再次输入登录密码">
                <template #prepend><i class="el-icon-view"></i></template>
              </el-input>
            </el-col>
        </el-row>
        <el-row class="txt">
            <el-col>
              <el-input v-model="form.phone" placeholder="请输入手机号码">
                <template #prepend><i class="el-icon-phone"></i></template>
              </el-input>
            </el-col>
        </el-row>
        <el-row class="txt">
            <el-col>
              <el-input v-model="form.code" placeholder="请输入手机验证码">
                <template #append>
                  <el-button @click="getCode" :disabled="isclickCode" v-preventMoreClick>
                    <span v-show="isclickCode">{{num}}s后重新获取</span>
                    <span v-show="!isclickCode">获取验证码</span>
                  </el-button>
                </template>
              </el-input>
            </el-col>
        </el-row>
        <el-button class="loginbtn" type="primary" @click="rergiter" v-preventMoreClick>注册</el-button>
        <p class="register"><router-link to="/login">登录</router-link></p>
      </div>
    </div>
    <div class="footer">Copyright © {{new Date().getFullYear()}} 安徽淝软信息科技有限公司 皖ICP备2021005601号-3</div>
</div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { register, vcode } from '@/api/user'
import { reactive, ref  } from 'vue'
import navheader from './components/loginHeader.vue'
import { phone, isFourNum } from '../utils/validator'
import { useRouter } from 'vue-router';
export default {
  components: { navheader },
  setup() {
    const form = reactive({
      username: '',
      phone: '',
      password: '',
      agin_password: '',
      code: ''
    })
    const router = useRouter()
    // 登录注册
    const rergiter = () => {
      if (form.username === '') {
        return ElMessage.error('用户名不正确')
      } else if (form.password === '') {
        return ElMessage.error('密码不正确')
      } else if (form.agin_password === '' || form.password !== form.agin_password) {
        return ElMessage.error('两次密码不正确')
      } else if (form.phone === '' || !phone(form.phone)) {
        return ElMessage.error('手机号码不正确')
      } else if (form.code === '' || !isFourNum(form.code)) {
        return ElMessage.error('验证码不正确')
      }
      register(form).then(res => {
        if (res.res === 0) {
          router.push('/')
          ElMessage.success(res.msg)
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
    const getCode = () => {
      if (form.phone === '' || !phone(form.phone)) {
        return ElMessage.error('手机号码不正确')
      }
      vcode({ phone: form.phone }).then(res => {
        if (res.res === 0) {
          isclickCode.value = true
          timer()
        } else {
          ElMessage.error(res.msg)
        }
      })
    }
    return {
      form,
      rergiter,
      getCode,
      isclickCode,
      num
    }
  },
}
</script>

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
    .main {
      position:relative;
      width: 500px;
      height: auto;
      margin: 0 auto;
      padding: 20px 40px;
      border-radius: 5px;
      background: $colorfff;
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
    .headtitle{
      height:40px;
      line-height:40px;
      font-size:18px;
      letter-spacing:9px;
      border-bottom: 1px solid #dadada;
      position: relative;
      &::before {
        content: "";
        width: 46px;
        height: 3px;
        display: block;
        position: absolute;
        bottom: -2px;
        background: $mainColor;
      }
    }
    .txt{
      line-height:40px;
      height:40px;
      margin-top:15px;
      color: $color333;
      .hl {
        font-size: 16px;
      }
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