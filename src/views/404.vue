<template>
  <div class="error">
    <svg-icon icon-class="404" />
    <h1>很抱歉，您访问的页面出错了！</h1>
    <el-tag type="primary" class="return"><router-link to="/">返回首页</router-link></el-tag>
  </div>
</template>
<style lang="scss" scoped>
.error {
  margin-top: 6vh;
  text-align: center;
  .svg-icon {
    font-size: 400px;
  }
  h1 {
    font-weight: 300;
  }
  .return {
    width: 200px;
    margin-top: 15px;
    border: 1px solid $mainColor;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: $mainColor;
    }
    &:hover {
      background: $bgblock;
      border: none;
      a {
        color: $colorfff;
      }
      transition: all 0.3s;
    }
  }
}
</style>