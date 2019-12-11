<template>
  <!-- 轮播图 -->
  <el-carousel trigger="click" height="450px">
    <el-carousel-item v-for="img in background_imgs" :key="img">
      <img :src="img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
/*
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'
import background04 from '../../assets/Images/Carousel/background04.jpg'
import background05 from '../../assets/Images/Carousel/background05.jpg'
*/
import background06 from '../../assets/Images/Carousel/background06.png'
import background07 from '../../assets/Images/Carousel/background07.png'
import background08 from '../../assets/Images/Carousel/background08.png'

export default {
  data () {
    return {
      background_imgs: [
        /*
        background01,
        background02,
        background03,
        background04,
        background05,
        */
        background06,
        background07,
        background08
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

.el-carousel {
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px;
  overflow: hidden;
}
</style>
