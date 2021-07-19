<template>
  <div class="userNav">
    <div class="userNavLest">
      <img src="../../assets/images/oscross_logo_other.png" alt="">
      <el-divider direction="vertical"></el-divider>
      <slot name="title"></slot>
    </div>
    <div class="userNavRight">
      <router-link to="/">首页</router-link>
      <slot name="user"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/reset.scss';
.el-divider {
  background: $color333;
}
.userNav {
  @include flex(space-between);
  padding: 20px 20px 50px;
  .userNavLest {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: $colorfont;
    img {
      max-width: 200px;
      width: 100%;
    }
  }
  .userNavRight {
    display: flex;
    align-items: center;
    color: $mainColor;
    font-size: 16px;
    a {
      color: $colorfont;
      padding-right: 15px;
      &:hover {
        color: $mainColor;
      }
    }
  }
}
</style>