<template>
<div class="footer">
  <el-row type="flex" justify="center" class="foot hidden-sm-and-down">
    <el-col class="hidden-sm-and-down" :md="6" :lg="6" :xl="6">
      <img src="../../../assets/images/logo.png" alt="">
      <p>让国产操作系统也能运行 Windows 软件</p>
    </el-col>
    <el-col class="hidden-sm-and-down" :md="4" :lg="4" :xl="4">
      <h3>OSCross</h3>
      <p><router-link to="/">首页</router-link></p>
      <p><router-link to="/product">产品中心</router-link></p>
      <p><router-link to="/download">下载</router-link></p>
      <p><router-link to="/server/news">服务</router-link></p>
    </el-col>
    <el-col class="hidden-sm-and-down" :md="4" :lg="4" :xl="4">
      <h3>支持</h3>
      <p><router-link to="/server/news">常见问题</router-link></p>
      <p><router-link to="/server/remark">在线留言</router-link></p>
    </el-col>
    <el-col class="hidden-sm-and-down" :md="4" :lg="4" :xl="4">
      <h3>关于</h3>
      <p><router-link to="/about">关于我们</router-link></p>
    </el-col>
    <el-col class="hidden-sm-and-down" :md="6" :lg="6" :xl="6">
      <h3>联系我们</h3>
      <p>电话：13569854126</p>
      <p>邮箱：xxxxxx@qq.com</p>
      <p>地址：安徽省合肥市高新区创新大道2809号置地创新中心3202</p>
    </el-col>
    <!-- <el-col :span="6">
      <img src="../../../assets/images/logo.png" alt="">
      <p>扫一扫 关注我们</p>
    </el-col> -->
  </el-row>
  <p class="verson">Copyright © {{new Date().getFullYear()}} 安徽淝软信息科技有限公司  皖ICP备2021005601号-3</p>
</div>
</template>
<script>
export default {
  name: 'footerMain'
}
</script>
<style lang="scss" scoped>
.footer {
  background: $bgblock;
  color: $colorfff;
  .foot {
    padding: 30px;
    max-width: $maxwidth;
    width: 90%;
    margin: 0 auto;
    h3 {
      font-size: 18px;
      padding-bottom: 10px;
    }
    p {
      padding-bottom: 5px;
    }
    a {
      color: $colorfff;
      line-height: 2;
      &:hover {
        color: $mainColor;
      }
    }
  }
  .verson {
    text-align: center;
    padding: 20px;
  }
}

</style>