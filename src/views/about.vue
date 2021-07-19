<template>
  <div class="about">
    <h2>关于我们</h2>
    <el-row class="about_main" justify="center">
      <el-col :span="6">
        <p class="svgIcon"><svg-icon icon-class="address" /></p>
        <p class="svgIcon">公司地址</p>
        <p>安徽省合肥市高新区创新大道2609号置地创新中心3202</p>
      </el-col>
      <el-col :span="6">
        <p class="svgIcon"><svg-icon icon-class="phone" /></p>
        <p class="svgIcon">联系方式</p>
        <p>电话：13569854126</p>
        <p>邮箱：xxxxxx@qq.com</p>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: auto;
  flex-grow: 2;
  h2 {
    text-align: center;
    padding: 20px 0 100px 0;
  }
  .about_main {
    width: 100%;
    justify-content: center;
    .el-col {
      padding: 30px;
      background: #dadada;
      text-align: center;
      max-width: 300px;
      &:last-child {
        margin-left: 30px;
      }
      .svg-icon {
        font-size: 30px;
      }
      p.svgIcon {
        padding-bottom: 10px;
      }
    }
  }
}
</style>
