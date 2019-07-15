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
        <span class="title"><router-link class="link" to="/">　首页　</router-link></span>
        <span class="title"><router-link class="link" to="/AboutUs">关于我们</router-link></span>
        <span class="title"><router-link class="link" to="/Product">产品中心</router-link></span>
      </div>
      <div class="row">
        <span class="title"><router-link class="link" to="/Solution">解决方案</router-link></span>
        <span class="title"><router-link class="link" to="/News">新闻资讯</router-link></span>
        <span class="title"><router-link class="link" to="/ContactUs">联系我们</router-link></span>
      </div>
    </div>
    <!-- <div class="footer-item">邮件：jack.wang@aizepa.com</div> -->
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  padding-left: 260px;
}

.footer-item {
  margin-top: 10px;
  margin-bottom: 10px;
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
</style>
