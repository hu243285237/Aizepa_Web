<template>
  <div class="index">
    <el-container>
      <el-main>
        <!-- 轮播图 -->
        <el-carousel trigger="click" height="480px">
          <el-carousel-item v-for="img in background_imgs" :key="img">
            <img :src="img">
          </el-carousel-item>
        </el-carousel>
        <!-- 产品介绍 -->
        <div class="context-product">
          <div class="product">
            <img class="product-img-left" width="500" height="350" src="../../assets/Images/Carousel/background01.jpg" />
            <div class="product-text-right">
              <div class="product-text">
                <h2>工业路由</h2>
                  <p>　　工业路由器是一种，利用公用无线网络为用户提供无线的数据传输功能。
                      已广泛应用于物联网产业链中的M2M行业，如智能电网、智能交通、智能家居、
                      金融物联网无线通信路由器、移动POS终端、供应链自动化、工业自动化、智能建筑、
                      消防、公共安全、环境保护、气象、数字化医疗、遥感勘测、农业、林业、水务、煤矿、石化等领域。
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      background_imgs: [
        background01,
        background02,
        background03
      ]
    }
  }
}
</script>

<style scoped>
.el-main {
  margin: 0px;
  padding: 0px;
}
</style>
