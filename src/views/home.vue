<template>
  <div class="home" ref="aaa">
    <div class="banner productPage_banner">
      <h2 class="productBannerTit">OSCross应用兼容系统,让UOS和麒麟操作系统也能运行Windows软件</h2>
      <el-button type="primary" class="downloadIso">
        <router-link to="/download">免费下载</router-link>
      </el-button>
    </div>
    <el-row>
      <!-- first -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="homeIntrodution compatible">
        <div class="hborder firstdown">OSCross应用兼容系统</div>
        <el-divider class="elDivider bgcolor"><svg-icon icon-class="js" /></el-divider>
        <p class="firstTxt">一款可直接运行在X86架构终端+国产操作系统上的软件产品，解决用户在国产操作系统（UOS、麒麟等）中无法使用Windows原有应用生态难题。</p>
        <img class="firstimg" src="../assets/images/uosshow.png" alt="OSCross">
      </el-col>
      <!-- 产品特性 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="homeIntrodution second">
        <div class="hborder secondTitle">产品特性</div>
        <el-divider class="elDivider"><svg-icon icon-class="yd" /></el-divider>
        <el-row class="product" type="flex" justify="space-between">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList1">
            <div>
              <h3><svg-icon icon-class="change" />无缝切换</h3>
              <p class="sameh">一键无缝切换到Windows系统，满足用户从Windows到国产操作系统过度切换；</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList2">
            <div>
              <h3><svg-icon icon-class="install" />一键安装</h3>
              <p class="sameh">用户在国产操作系统上直接双击运行.exe文件，系统可自动安装应用软件，并将应用快捷方式直接推送到国产操作系统桌面上；</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList3">
            <div>
              <h3><svg-icon icon-class="convenient" />便捷体验</h3>
              <p class="sameh">双击桌面快捷方式，即可像运行原生应用一样，直接在国产操作系统上运行Windows 应用；</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList4">
            <div>
              <h3><svg-icon icon-class="compatible" />兼容性强</h3>
              <p class="sameh">基本兼容市面所有Windows应用，且兼容绝大部分的USB外设，保证用户原有应用及设备使用习惯。</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList5">
            <div>
              <h3><svg-icon icon-class="speed" />高速运行</h3>
              <p class="sameh">完整发挥硬件性能，保障国产操作系统流畅运行；</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="secondList secondList6">
            <div>
              <h3><svg-icon icon-class="safe" />数据安全</h3>
              <p class="sameh">用户应用直接运行在本地终端上，所有数据均存储在于本地硬盘中。国产操作系统及应用使用均安全可控。</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!-- 兼容说明 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="homeIntrodution">
        <div class="hborder thirdTitle">产品视频</div>
        <el-divider class="elDivider bgcolor"><svg-icon icon-class="video" /></el-divider>
        <el-empty :image-size="200" description="暂无视频" v-if="videoList.length <= 0"></el-empty>
        <el-row type="flex" justify="center" class="thirdVideo explain">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="video" v-for="(item,index) in videoList" :key="index">
            <div class="video-con">
              <div class="video-img" @mouseenter="enter" @mouseleave="out">
                  <img :src="item.img" :alt="item.title">
                  <div class="video-play">
                      <div class="btn-lg" @click="showDIalog(item.url)"><i class="el-icon-video-play" /></div>
                  </div>
              </div>
              <div class="video-title">{{item.title}}</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!-- 常见问题 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="homeIntrodution fourth">
        <div class="hborder fourthTitle">常见问题</div>
        <el-divider class="elDivider"><svg-icon icon-class="questions" /></el-divider>
        <el-empty :image-size="200" description="暂无数据" v-if="items.list.length <= 0"></el-empty>
        <el-row class="question">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in items.list" :key="index" class="flex cl">
            <el-row class="col">
              <el-col class="questionLeft hidden-sm-and-down" :md="5" :lg="5" :xl="5">
                <h1>{{item.create_time.split(' ')[0]}}</h1>
                <span>{{item.create_time.split(' ')[1]}}</span>
              </el-col>
              <el-col class="questionRight" :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                <h2 :title="item.title"><router-link :to="'/details/' + item.id"><i class="el-icon-caret-left" />{{item.title}}</router-link></h2>
                <div class="questionDetails">{{item.section}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="more" v-if="items.list.length > 0">
          <router-link to="/server"><el-button type="primary">更多</el-button></router-link>
        </div>
      </el-col>
    </el-row>
    <el-dialog v-model="isshowVideo" width="60%" :close-on-click-modal="false" custom-class="videoDialog">
      <video controls="controls" poster="" width="" height="" :src="activeVideoUrl" type="video/mp4"></video>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref, onMounted, nextTick, unref } from 'vue'
import { getlist, get_video } from '@/api/user'
import { getEl } from '@/utils/validator'
export default {
  setup() {
    // 动画
    const enter = (el) => {
      el.target.classList.add('animate__animated', 'animate__pulse')
    }
    const out = (el) => {
      el.target.classList.remove('animate__animated', 'animate__pulse')
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

    const scrollHeight = () => {
      // 事件滚动
      if (isShowAnimate('.secondTitle')) {
        getEl('.secondTitle').classList.add('animate__animated', 'animate__zoomIn')
      }
      if (isShowAnimate('.secondList1')) {
        getEl('.secondList1').classList.add('animate__animated', 'animate__fadeInRight')
      }
      if (isShowAnimate('.secondList2')) {
        getEl('.secondList2').classList.add('animate__animated', 'animate__fadeInUp')
      }
      if (isShowAnimate('.secondList3')) {
        getEl('.secondList3').classList.add('animate__animated', 'animate__fadeInLeft')
      }
      if (isShowAnimate('.secondList4')) {
        getEl('.secondList4').classList.add('animate__animated', 'animate__fadeInLeft')
      }
      if (isShowAnimate('.secondList5')) {
        getEl('.secondList5').classList.add('animate__animated', 'animate__fadeInDown')
      }
      if (isShowAnimate('.secondList6')) {
        getEl('.secondList6').classList.add('animate__animated', 'animate__fadeInRight')
      }

      if (isShowAnimate('.thirdTitle')) {
        getEl('.thirdTitle').classList.add('animate__animated', 'animate__zoomIn')
      }
      if (isShowAnimate('.thirdVideo')) {
        getEl('.thirdVideo').classList.add('animate__animated', 'animate__fadeInUp')
      }

      if (isShowAnimate('.fourthTitle')) {
        getEl('.fourthTitle').classList.add('animate__animated', 'animate__zoomIn')
      }
      if (isShowAnimate('.question')) {
        getEl('.question').classList.add('animate__animated', 'animate__fadeInUpBig')
      }

    }
    // 数据
    const items = reactive({
      page_size: 10,
      page_no: 1,
      list: []
    })
    // 获取列表
    const get_list = () => {
      getlist(items).then(res => {
        if (res.res === 0) {
          const list = res.data.filter(item => item.status === 1)
          if (list.length > 3) {
            items.list = list.splice(0, list.length - (list.length - 3))
          } else {
            items.list = list
          }
        }
      })
    }

    // 获取视频
    const videoList = ref([])
    const get_vedio_list= () => {
      get_video({}).then(res => {
        videoList.value = res.data
      })
    }
    // 弹框
    const isshowVideo = ref(false)
    // 点击弹框显示相应视频
    const activeVideoUrl = ref('')
    const showDIalog = (data) => {
      isshowVideo.value = true
      activeVideoUrl.value = data
    }
    onMounted(() => {
      get_list()
      get_vedio_list()
      nextTick(() => {
        if (getEl('.home')) {
          getEl('.compatible').classList.add('animate__animated', 'animate__slideInUp')
          window.addEventListener('scroll', scrollHeight)
        }
      })
    })

    return {
      items,
      get_list,
      isshowVideo,
      activeVideoUrl,
      videoList,
      showDIalog,
      enter,
      out,
      scrollHeight
    }
  }
}
</script>
<style lang="scss">
.videoDialog {
  background: transparent!important;
  box-shadow:none;
  .el-icon-close {
    font-size: 30px;
    color: $colorfff;
    &:hover {
      color: $mainColor;
    }
  }
  video {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  overflow: auto;
  .banner {
    background: url(@/assets/images/banner.png) no-repeat center 0;
  }
  .compatible {
    text-align: center;
    padding-bottom: 40px;
    p {
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      font-size: 18px;
      padding: 0 20px;
    }
    img {
      margin: 50px 0;
      max-width: 500px;
      width: 100%;
    }
  }
}
.video-con {
  text-align: center;
  .video-img {
    position: relative;
    width: 100%;
    margin: 0 auto;
    &:hover {
      .video-play {
        display: block;
      }
    }
    img { width: 100%; max-width: 500px; }
    .video-play {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 60px;
      color: $mainColor;
      margin-top: -30px;
      margin-left: -35px;
      cursor: pointer;
    }
  }
  .video-title {
    line-height: 2;
    padding-top: 10px;
    font-size: 16px;
  }
}

.el-row {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  .homeIntrodution:nth-child(odd) {
    background: $mainBlockBg;
  }
  .product {
    .secondList {
      div {
        background: $bg;
        padding: 20px;
        margin: 20px;
        h3 {
          padding-bottom: 20px;
          font-size: 26px;
          svg {
            margin-right: 15px;
          }
        }
        p {
          height: 80px;
          font-size: 14px;
          color: $colorfont;
          line-height: 25px;
        }
        &:hover {
          box-shadow:0 1px 5px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.1) inset;
          transform: translateY(-10px);
          transition: all 0.5s;
        }
      }
    }
  }
  .product,.question,.explain {
    width: 100%;
    max-width: $maxwidth;
    margin: 0 auto;
  }
  // 常见问题
  .question {
    .cl {
      position: relative;
      margin: 20px;
      padding: 15px 0;
      &:hover {
        .questionLeft, .questionRight a, .questionRight .questionDetails {
          color: $colorfff;
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 0;
        background: $hoverBg;
        z-index: -1;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -ms-transition: all .5s;
        transition: all .5s;
      }
      .questionLeft {
        padding: 6px 0;
        border-right: 1px solid #eee;
        text-align: center;
        color: $colorccc;
        h1 {
          font-size: 34px;
        }
        span {
          font-size: 16px;
        }
      }
      .questionRight {
        padding: 12px 40px;
        h2 {
          font-size: 16px;
          line-height: 24px;
          padding-bottom: 12px;
          @include font_hideen(1);
          a {
            color: #767676;
          }
        }
        .questionDetails {
          color: #b2b2b2;
          line-height: 24px;
          @include font_hideen(1);
        }
      }
      &:hover:before {
        width: 100%;
        height: 100%;
      }
    }

  }
}
</style>