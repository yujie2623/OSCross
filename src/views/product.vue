<template>
  <div class="productPage">
    <div class="productPage_banner">
      <h2 class="productBannerTit">可跨平台安装并运行虚拟应用，为用户提供高效便捷的Windows应用程序交付</h2>
      <el-button type="primary" class="downloadIso">
        <router-link to="/download">免费下载</router-link>
      </el-button>
    </div>
    <div class="productPage_main systemrequire">
      <div class="hborder">系统要求</div>
      <el-divider class="elDivider bgcolor"><svg-icon icon-class="support" /></el-divider>
      <el-row type="flex" justify="center" class="stytem">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="requireimg">
          <img src="../assets/images/System.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="require">
          <p><span>CPU</span><strong>X86架构</strong></p>
          <p><span>内存</span><strong>不小于8G，可依据性能需求增加选配</strong></p>
          <p><span>硬盘</span><strong>不小于128G</strong></p>
          <p><span>显卡</span><strong>支持核显，可依据性能需求增加选配独立显卡</strong></p>
        </el-col>
      </el-row>
    </div>
    <div class="productPage_main">
      <div class="hborder advantage">产品优势</div>
      <el-divider class="elDivider"><svg-icon icon-class="advantage" /></el-divider>
      <el-row class="product_introduct" type="flex" justify="center">
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="TopLeft">
          <h2><svg-icon icon-class="changenew"/>支持X86终端利旧</h2>
          <p>支持x86终端利旧，在国产操作系统上安装上应用兼容系统，可以完美解决国产替代遇到的应用环境兼容问题。</p>
        </el-col>
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="TopRight">
          <h2><svg-icon icon-class="datasafe"/>数据应用安全可控</h2>
          <p>用户应用直接运行在本地终端上，所有数据均存储在于本地硬盘中。满足用户使用信创操作系统需求，同时解决应用生态不兼容问题。操作系统、应用均在安全可控范围中。</p>
        </el-col>
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="bottomLeft">
          <h2><svg-icon icon-class="simple"/>简化应用交付与管理</h2>
          <p>所有Windows应用均可集中管理，无缝交付，避免再次安装其他第三方管理工具带来的管理维护难题。</p>
        </el-col>
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="bottomRight">
          <h2><svg-icon icon-class="quality"/>性能强劲体验佳</h2>
          <p>OSCross应用兼容系统采用自主研发的高效应用连接协议完全保障应用交付与使用流畅度，支持office、PS、3Done、Animate等办公软件应用。</p>
        </el-col>
      </el-row>
    </div>
    <div class="productPage_main">
      <div class="hborder softwareTit">兼容软件</div>
      <el-divider class="elDivider bgcolor"><svg-icon icon-class="compatibility" /></el-divider>
      <el-row type="flex" justify="center" class="ptb25 software software1">
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='Microsoft-Excel' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='WORD' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='powerPoint' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='Ps' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='oa' />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="ptb25 software software2">
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='IE' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='google' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='vx' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='QQ' />
        </el-col>
        <el-col :span="4" @mouseenter="enter" @mouseleave="out">
          <svg-icon icon-class='dingding' />
        </el-col>
      </el-row>
      <br/><br/><br/>
    </div>
  </div>
</template>
<script>
import { onMounted,nextTick } from 'vue'
import { getEl } from '@/utils/validator'
export default {
  setup() {

    // 动画
    const enter = (el) => {
      el.target.classList.add('animate__animated', 'animate__rubberBand')
    }
    const out = (el) => {
      el.target.classList.remove('animate__animated', 'animate__rubberBand')
    }

    const isShowAnimate = (el) => {
      if (getEl(el)) {
        const d = getEl(el).getBoundingClientRect().top
        const clientHeight = document.documentElement.clientHeight // 屏幕高度
        if (d - clientHeight < -10) {
          return true
        } else {
          return false
        }
      }
    }

    const scrollfuc = () => {
      // 产品优势
      if (isShowAnimate('.advantage')) {
        getEl('.advantage').classList.add('animate__animated', 'animate__flipInX')
      }
      if (isShowAnimate('.TopLeft')) {
        getEl('.TopLeft').classList.add('animate__animated', 'animate__fadeInTopLeft')
      }
      if (isShowAnimate('.TopRight')) {
        getEl('.TopRight').classList.add('animate__animated', 'animate__fadeInTopRight')
      }
      if (isShowAnimate('.bottomLeft')) {
        getEl('.bottomLeft').classList.add('animate__animated', 'animate__fadeInBottomLeft')
      }
      if (isShowAnimate('.bottomRight')) {
        getEl('.bottomRight').classList.add('animate__animated', 'animate__fadeInBottomRight')
      }
      // 兼容软件
      if (isShowAnimate('.softwareTit')) {
        getEl('.softwareTit').classList.add('animate__animated', 'animate__flipInX')
      }
      if (isShowAnimate('.software1')) {
        getEl('.software1').classList.add('animate__animated', 'animate__fadeInLeftBig')
      }
      if (isShowAnimate('.software2')) {
        getEl('.software2').classList.add('animate__animated', 'animate__fadeInRightBig')
      }
    }

    onMounted(() => {
      nextTick(() => {
        if (document.querySelector('.productPage')) {
          getEl('.systemrequire').classList.add('animate__animated', 'animate__slideInUp')
          window.addEventListener('scroll', scrollfuc, true)
        }
      })
    })

    return {
      enter,
      out
    }
  }
}
</script>
<style lang="scss" scoped>
.productPage {
  .productPage_banner {
    background: url(@/assets/images/product.png) no-repeat center;
  }
  .productPage_main {
    padding: 50px 0;
    &:nth-child(even) {
      background: $mainBlockBg;
    }
    .product_introduct {
      width: 100%;
      max-width: $maxwidth;
      margin: 0 auto;
      .el-col {
        background: $bg;
        padding: 0 30px;
        margin-bottom: 30px;
        &:nth-child(even) {
          margin-left: 30px;
        }
        p {
          height: 120px;
          font-size: 14px;
          color: $colorfont;
          line-height: 25px;
        }
        h2 {
          margin: 20px 0;
          font-size: 26px;
          svg {
            margin-right: 15px;
          }
        }
      }
    }
    .stytem {
      padding-bottom: 80px;
      font-size: 16px;
      max-width: $maxwidth;
      width: 100%;
      margin: 0 auto;
      .requireimg {
        text-align: center;
        img {
          max-width: 350px;
          width: 100%;
        }
      }
      .require {
        padding-top: 5vh;
        p {
          display: flex;
          align-items: center;
          border: 1px solid #dadada;
          border-top: none;
          line-height: 40px;
          background:$bg;
          span {
            display: inline-block;
            width: 60px;
            text-align: center;
            border-right: 1px solid #dadada;
          }
          strong {
            display: inline-block;
            font-weight: normal;
            text-indent: 1em;
          }
          &:first-child {
            border-top: 1px solid #dadada;
          }
          &:nth-child(odd) {
            background: #fff;
          }
        }
      }
    }
    .software {
      width: 100%;
      max-width: $maxwidth;
      margin: 0 auto;
      padding-bottom: 50px;
      .el-col {
        text-align: center;
        .svg-icon {
          font-size: 70px;
        }
      }
    }
  }
}
</style>