<template>
  <el-row class="downloadPage" type="flex" justify="center">
    <el-col :xs="18" :sm="18" :md="10" :lg="9" :xl="8" class="download">
      <h1>OSCross下载专区</h1>
      <p>每个用户提供三个试用授权码，更多使用需要购买正版</p>
      <p>试用版可使用OSCross全部功能</p>
      <p>没有试用有效期，可永久使用</p>
      <p>国产操作系统UOS、麒麟可直接安装运行 Windows 程序</p>
      <div class="down">
        <el-button type="primary" v-if="!store.getters.username">
          <router-link to="/register">注册下载</router-link>
        </el-button>
      </div>
    </el-col>
    <el-col class="downloadimg hidden-sm-and-down" :span="6"><svg-icon icon-class="introduce" /></el-col>
  </el-row>
  <el-row class="downloadlist" type="flex" justify="center" v-if="store.getters.username">
    <el-col :xs="22" :sm="22" :md="16" :lg="15" :xl="14">
      <h1>下载列表</h1>
    </el-col>
    <el-col :xs="22" :sm="22" :md="16" :lg="15" :xl="14">
      <el-table :data="downloadlist" border stripe>
        <el-table-column property="name" label="名称" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column property="size" label="文件大小" align="center" show-overflow-tooltip>
          <template #default="scope">
            {{bytesToSize(scope.row.size)}}
          </template>
        </el-table-column>
        <el-table-column property="version" label="版本号" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column property="desc" label="描述" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column property="release_time" label="发布日期" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <a :href="downloadApk(scope.row)" download class="download_file"><i class="el-icon-download" />下载</a>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
import { onMounted, nextTick, ref } from 'vue'
import { bytesToSize, getEl } from '@/utils/validator'
import { useStore } from 'vuex'
import { get_apk } from '@/api/user'
export default {
  setup() {
    const store = useStore()
    const downloadlist = ref([])
    const download = () => {
      get_apk({}).then(res => {
        if (res.res === 0) {
          downloadlist.value = res.data
        }
      })
    }

    // 下载文件

    const downloadApk = (data) => {
      const url = import.meta.env.DEV ? `/api${data.url.split('http://www.oscross.com')[1]}` : data.url.split('http://www.oscross.com')[1]
      return url
    }
    onMounted(() => {
      download()
      nextTick(() => {
        getEl('.download').classList.add('animate__animated', 'animate__lightSpeedInLeft')
        getEl('.downloadimg').classList.add('animate__animated', 'animate__lightSpeedInRight')
      })
    })
    return {
      store,
      downloadlist,
      downloadApk,
      bytesToSize
    }
  }
}
</script>
<style lang="scss" scoped>
.downloadPage {
  display: flex;
  align-items: center;
  flex-grow: 4;
  padding: 5vh 0;
  .download {
    width: 100%;
    height: auto;
    text-align: center;
    background: $bg;
    padding: 50px 20px;
    border-radius: 18px;
    h1 {
      padding-bottom: 20px;
      font-size: 35px;
    }
    p {
      color: $colorfont;
      line-height: 36px;
      font-size: 16px;
    }
    .down {
      margin-top: 20px;
      a {
        color: $colorfff;
      }
    }
  }
  .downloadimg {
    .svg-icon {
      font-size: 400px;
    }
  }
}
.downloadlist {
  padding: 5vh 0 10vh;
  h1 {
    padding-bottom: 10px;
  }
  .download_file {
    color: $mainColor;
  }
}
</style>
