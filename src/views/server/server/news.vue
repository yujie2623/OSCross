<template>
  <div class="newsList" style="overflow:auto">
    <el-empty :image-size="300" description="暂无数据" v-if="items.list.length <= 0"></el-empty>
    <div class="newPage" v-for="item in items.list" :key="item">
      <el-row class="news" type="flex" justify="space-between">
        <el-col class="news_img hidden-sm-and-down">
          <h1>{{item.create_time.split(' ')[0]}}</h1>
          <p>{{item.create_time.split(' ')[1]}}</p>
        </el-col>
        <el-col class="newsMain" :span="20">
          <h3>
            <router-link :to="'/details/' + item.id">{{item.title}}</router-link>
          </h3>
          <div class="fontHideen">{{item.section}}</div>
          <router-link :to="'/details/' + item.id"><el-button  type="primary" size="small">查看详情</el-button></router-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
    <!-- 分页 -->
    <el-pagination
      style="text-align:center;"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="items.pagenum"
      :page-sizes="[10,20,50,100]"
      :page-size="items.page_size"
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import { getlist } from '../../../api/user'

export default({
  setup() {
    const items = reactive({
      page_size: 10,
      page_no: 1,
      list: [],
      pagenum: 1
    })

    // 分页操作
    const handleCurrentChange = (v) => { // 当前页
      items.page_no = v
      get_list()
    }
    const handleSizeChange = (v) => { // 每页的条数
      items.page_size = v
      get_list()
    }

    // 获取列表
    const get_list = () => {
      getlist(items).then(res => {
        if (res.res === 0) {
          items.list = res.data.filter(item => item.status === 1)
          items.pagenum = res.count // 总条数
        }
      })
    }

    onMounted(() => {
      get_list()
    })

    return {
      items,
      get_list,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>


<style lang="scss" scoped>
.news {
  display: flex;
  margin-top: 30px;
  .newsMain {
    padding-left: 30px;
    h3 {
      padding-top: 10px;
      font-size: 20px;
      cursor: pointer;
      a {
        color: $color333;
        &:hover {
          color: $mainColor;
        }
      }
    }
    .fontHideen {
      @include font_hideen(3);
      opacity: 0.8;
      line-height: 25px;
      padding-top: 5px;
      color: $colorfont;
    }
    a {
      margin-top: 10px;
      display: inline-block;
    }
  }
  .news_img {
    max-width: 150px;
    height: 150px;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      line-height: 36px;
    }
    p {
      color: $colorfont;
    }
  }
}
</style>