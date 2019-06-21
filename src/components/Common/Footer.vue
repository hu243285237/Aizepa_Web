<template>
  <el-footer height="240px">
    <div class="footer-item">深圳市晟瑞实业有限公司</div>
    <div class="footer-item">地址：广东省深圳市龙岗区坂雪岗大道3012号坂田商务大厦726室</div>
    <div class="footer-item">电话：+86-755-85207786</div>
    <div class="footer-item">传真：+86-755-85207781</div>
    <div class="footer-item">邮件：jack.wang@aizepa.com</div>
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
</style>
