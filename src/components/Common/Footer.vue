<template>
  <el-footer height="240px">
    <div class="text-left">
      <div class="footer-item">深圳市晟瑞实业有限公司</div>
      <div class="footer-item">地址：广东省深圳市龙岗区坂雪岗大道3012号坂田商务大厦726室</div>
      <div class="footer-item">电话：+86-755-85207786</div>
      <div class="footer-item">传真：+86-755-85207781</div>
    </div>
    <div class="text-right">
      <div class="row">
        <a class="title" href="#" @click="emitToHeader('1', 'Product', '工业路由 DTU')">网站首页</a>
        <a class="title" href="#" @click="emitToHeader('2', 'AboutUs', '公司简介')">关于我们</a>
        <a class="title" href="#" @click="emitToHeader('3', 'Product', '工业路由 DTU')">产品中心</a>
      </div>
      <div class="row">
        <a class="title" href="#" @click="emitToHeader('4', 'Solution', '车载 T-BOX 方案')">解决方案</a>
        <!-- <a class="title" href="#" @click="emitToHeader('5', 'News', '公司动态')">新闻资讯</a> -->
        <a class="title" href="#" @click="emitToHeader('6', 'ContactUs', '联系方式')">联系我们</a>
      </div>
    </div>
    <!-- <div class="footer-item">邮件：jack.wang@aizepa.com</div> -->
  </el-footer>
</template>

<script>
import eventBus from './EventBus.js'

export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitToHeader (index, page, name) {
      let params = { index, page, name }
      eventBus.$emit('changePage', params)
    }
  }
}
</script>

<style scoped>
.el-footer {
  text-align: left;
  background-color: rgb(31, 32, 36);
  color: aliceblue;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 220px;
}

.footer-item {
  margin-top: 15px;
  margin-bottom: 15px;
}

.text-left {
  width: 500px;
  height: 150px;
  float: left;
}

.text-right {
  width: 500px;
  height: 150px;
  float: right;
  margin-right: 200px;
}

.title {
  display: inline;
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
}

.row {
  margin-top: 15px;
  margin-bottom: 25px;
}

.link {
  color: aliceblue;
  text-decoration: none;
}

a {
  color: white;
  text-decoration: none;
}

@media only screen and (max-width: 1600px) {
  .text-right {
    margin-right: 0px;
  }
}
</style>
