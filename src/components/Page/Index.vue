<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img">
        </el-carousel-item>
      </el-carousel>
      <!-- 产品介绍 -->
      <Product/>
    </el-main>
  </el-container>
</template>

<script>
import Product from '@/components/Common/Product'

import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'

export default {
  name: 'HelloWorld',
  components: {
    Product
  },
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
img {
  width: 100%;
  height: 100%;
}

.el-main {
  margin-left: 250px;
  margin-right: 250px;
  padding: 0px;
}
</style>
