<template>
  <div class="footer">
    <div class="footer-text">
      <a class="footer-btn" href="#">首页</a>
      <a class="footer-btn" href="#">产品中心</a>
      <a class="footer-btn" href="#">解决方案</a>
      <a class="footer-btn" href="#">服务支持</a>
      <a class="footer-btn" href="#">公司介绍</a>
    </div>
    <div class="footer-text">地址：广东省深圳市龙岗区坂雪岗大道3012号坂田商务大厦726室</div>
    <div class="footer-text">电话：+86-755-85207786</div>
    <div class="footer-text">传真：+86-755-85207781</div>
    <div class="footer-text">邮件：jack.wang@aizepa.com</div>
  </div>
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
.footer {
  text-align: left;
  background-color: rgb(31, 32, 36);
  color: aliceblue;
  padding: 30px;
}

.footer-text {
  margin-top: 10px;
  margin-bottom: 10px;
}

.footer-btn {
  color: aliceblue;
  text-decoration-line: none;
  margin-right: 5px;
}
</style>
