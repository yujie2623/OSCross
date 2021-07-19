<template>
  <el-row class="remark">
    <el-col :span="24">
        <el-form :model="from" :inline="true" :rules="rules" ref="fromref" class="demo-ruleForm remarkFrom">
          <el-form-item prop="name">
            <el-input v-model="from.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="from.phone" placeholder="手机号码"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="from.email" placeholder="电子邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model.number="from.code" placeholder="短信验证码">
              <template #append>
                <el-button @click="getcode" :disabled="isShowCode" v-preventMoreClick>
                  <span v-show="isShowCode">{{num}}s后重新获取</span>
                  <span v-show="!isShowCode">获取验证码</span>
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="content">
            <el-input type="textarea" :rows="4" v-model="from.content" placeholder="请把您的需求留下，我们为您提供专业的解决方案"></el-input>
          </el-form-item>
          <div class="center"><el-button type="primary" @click="remark">提交</el-button></div>
        </el-form>

    </el-col>
  </el-row>
</template>
<script>
import { reactive, ref, unref } from 'vue'
import { message, vcode } from '@/api/user'
import { ElMessage } from 'element-plus';
import { isPhone, phone, isEmail, isCode } from '@/utils/validator'
export default {
  setup() {
    const fromref = ref(null)
    const from = reactive({
      name: '',
      email: '',
      phone: '',
      code: '',
      content: ''
    })

    const rules = {
      phone: [
        { required: true, validator: isPhone,  trigger: 'blur' }
      ],
      name: [
        { required: true, message: '姓名不能为空', trigger: 'blur' }
      ],
      email: [
        { required: true, validator: isEmail,  trigger: 'blur' }
      ],
      code: [
        { required: true, validator: isCode, trigger: 'blur' }
      ],
      content: [
        { required: true, message: '留言信息不能为空', trigger: 'blur' }
      ]
    }
    // 留言
    const remark = async () => {
      const fromRefName = unref(fromref) // ref
      if (!fromRefName) return
      try {
        await fromRefName.validate()
        message(from).then(res => {
          if(res.res === 0) {
            ElMessage.success(res.msg)
            fromRefName.resetFields()
          } else {
            ElMessage.error(res.msg)
          }
        })
      } catch (error) {}
    }

    // 获取验证码及倒计时
    const isShowCode = ref(false) // 是否显示倒计时值
    const num = ref(60)
    const timer = () => {
      const stopTimer = setInterval(() => {
        num.value--
        if(num.value === 0) {
          clearInterval(stopTimer)
          isShowCode.value = false
          num.value = 60
        }
      }, 1000)
    }
    const getcode = () => {
      if (!phone(from.phone)) {
        return ElMessage.error('手机号码不正确')
      }
      vcode({ phone: from.phone }).then(res => {
        if (res.res === 0) {
          isShowCode.value = true
          timer()
        } else {
          ElMessage.error(res.msg)
        }
      })
    }

    return {
      from,
      rules,
      fromref,
      remark,
      getcode,
      isShowCode,
      num
    }
  },
}
</script>
<style lang="scss" scoped>
.remarkFrom {
  width: 100%;
  text-align: center;
  margin: 50px auto;
  .el-form-item {
    display: block;
    .el-input,.el-textarea {
      width: 500px;
    }
  }
}
</style>