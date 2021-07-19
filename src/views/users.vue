<template>
  <div class="user">
    <!-- 导航 -->
    <navheader>
      <template v-slot:title>
        <span>个人中心</span>
      </template>
      <template v-slot:user>
        <i class="userimg el-icon-user-solid"></i>{{store.getters.username}}
      </template>
    </navheader>
    <!-- 内容 -->
    <el-row class="userContent" type="flex" justify="center">
      <el-col class="userContentLeft" :xs="20" :sm="20" :md="4" :lg="4" :xl="4">
        <i class="userimg el-icon-user-solid"></i>
        <p>{{userInfo.userlist.username}}</p>
        <h3>用户名</h3>
        <p>{{userInfo.userlist.username}}</p>
        <h3>手机号</h3>
        <p>{{userInfo.userlist.phone}}</p>
        <h3>剩余授权数</h3>
        <p>{{userInfo.userlist.auth_num}}</p>
        <div class="userAuthTab">
          <strong @click="isshow(1)" :class="{ 'active': activeIndex === 1 }"><svg-icon icon-class="authlist" />授权列表</strong>
          <strong @click="isshow(2)" :class="{ 'active': activeIndex === 2 }"><svg-icon icon-class="authcenter" />授权中心</strong>
        </div>
      </el-col>
      <el-col class="userContentRight" :xs="20" :sm="20" :md="12" :lg="12" :xl="12">
        <div class="userAuthList" v-show="activeIndex === 1">
          <el-table :data="listQuery.auth_list" border :header-cell-style="{background:'#FAFAFA'}" style="width: 100%;margin-bottom:30px">
            <el-table-column prop="apply_code" label="申请码" min-width="180" align="center" />
            <el-table-column prop="auth_code" label="授权码" min-width="180"  align="center" />
            <el-table-column prop="create_time" label="申请时间" min-width="180"  align="center" />
          </el-table>
          <el-pagination
            style="text-align:center;padding-top: 30px;"
            background
            hide-on-single-page
            layout="total, sizes, prev, pager, next, jumper"
            :total="listQuery.count"
            :page-sizes="[10,20,50,100]"
            :page-size="listQuery.page_size"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
        <div class="userAuthCenter" v-show="activeIndex === 2">
          <el-form label-position="center" label-width="100px" :model="authorise" class="authorisePage">
            <el-form-item label="授权类型" prop="type">
              <el-radio-group v-model="authorise.type">
                <el-radio :label="0">标准版</el-radio>
                <el-radio :label="2">专业版</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="申请码" prop="code">
              <el-input v-model="authorise.code"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="applyAuth" v-preventMoreClick>申请授权</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { getRoles, get_auth_list, apply_auth } from '@/api/user'
import { ElMessage } from 'element-plus';
import navheader from './components/loginHeader.vue'
export default {
  components: { navheader },
  setup() {
    const store = useStore()
    const userInfo = reactive({
      userlist: {}
    })
    const userdata = () => {
      getRoles().then(res => {
        if (res.res === 0) {
          userInfo.userlist = res.data
        }
      })
    }

    // 授权列表
    const listQuery = reactive({
      page_no: 1, // 当前条数
      page_size: 10, // 每页条数
      count: 1, //总条数
      auth_list: []
    })
    // 分页操作
    const handleCurrentChange = (v) => { // 当前页
      items.page_no = v
      getauthlist()
    }
    const handleSizeChange = (v) => { // 每页的条数
      items.page_size = v
      getauthlist()
    }

    const getauthlist = () => {
      get_auth_list(listQuery).then(res => {
        if (res.res === 0) {
          listQuery.auth_list = res.data
          listQuery.count = res.count // 总条数
        }
      })
    }

    // 授权
    const authorise =  reactive({
      type: 0,
      code: ''
    })
    const applyAuth = () => {
      if (authorise.code === '') {
        return ElMessage.error('请输入授权码')
      }
      apply_auth(authorise).then(res => {
        if (res.res === 0) {
          ElMessage.success(res.msg)
          authorise.code = ''
          getauthlist()
        } else {
          ElMessage.error(res.msg)
        }
      })
    }

    // 点击显示隐藏
    const activeIndex = ref(1)
    const isshow = (index) => {
      activeIndex.value = index
    }

    onMounted(() => {
      userdata()
      getauthlist()
    });
    return {
      store,
      userInfo,
      listQuery,
      handleCurrentChange,
      handleSizeChange,
      authorise,
      applyAuth,
      activeIndex,
      isshow
    }
  },
}
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: auto;
  padding-bottom: 80px;
  flex-grow: 6;
  background: rgb(236, 233, 230);
  .userContent {
    width: 100%;
    min-height: 60vh;
    .userContentLeft {
      text-align: center;
      background: $colorfff;
      margin-bottom: 30px;
      margin-right: 30px;
      .userimg {
        font-size: 50px;
        padding-top: 50px;
        color: $mainColor;
      }
      h3 {
        margin-top: 30px;
      }
      p {
        color: $colorfont;
        line-height: 26px;
      }
      .userAuthTab {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        strong {
          width: 80%;
          margin: 5px auto;
          font-weight: normal;
          line-height: 40px;
          cursor: pointer;
          svg {
            margin-right: 5px;
            font-size: 18px;
          }
          &:hover {
            background: $mainBlockBg;
          }
          &.active {
            color: $mainColor;
          }
        }
      }
    }
    .userContentRight {
      background: $colorfff;
      .userAuthCenter, .userAuthList {
        padding: 50px;
      }
    }
  }
}
</style>