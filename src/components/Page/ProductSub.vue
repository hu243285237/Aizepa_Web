<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img" />
        </el-carousel-item>
      </el-carousel>
      <!-- 产品介绍 -->
      <div class="content">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <p class="menu-title">主要方案</p>
          <el-menu-item index="1">车载 T-BOX方案</el-menu-item>
          <el-menu-item index="2">智慧交通解决方案</el-menu-item>
          <el-menu-item index="3">能源监测解决方案</el-menu-item>
          <el-menu-item index="4">化工管道监控解决方案</el-menu-item>
          <el-menu-item index="5">电梯物联网解决方案</el-menu-item>
        </el-menu>
        <div class="product">
          <p class="product-title">{{ product.name }}</p>
          <img class="product-img" style="width: 400px; height: 200px" :src="product.img" />
          <p class="product-title">产品介绍：</p>
          <p class="product-introduce">{{ product.introduce }}</p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'
import luyou11 from '../../assets/Images/Product/Type01/luyou01.jpg'

export default {
  data () {
    return {
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 产品信息
      product: {
        name: 'HDRM100 L1',
        introduce: '',
        img: luyou11
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

a {
  color: black;
  text-decoration-line: none;
}

.el-main {
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px;
  overflow: hidden;
}

.content {
  width: 100%;
  height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-menu {
  width: 300px;
  height: 100%;
  float: left;
}

.menu-title {
  color: white;
  font-size: 26px;
  margin: 0px 0px 10px 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #363636;
}

.el-menu-item {
  font-size: 16px;
}

.products-content {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.product {
  width: 50%;
  height: 500px;
  float: left;
}

.product-title {
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  float: left;
  margin-left: 100px;
  margin-right: 100px;
}

.product-img {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 100px;
  float: left;
}

.product-introduce {
  margin-left: 100px;
  float: left;
}
</style>
