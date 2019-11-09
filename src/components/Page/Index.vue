<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <Carousel/>
      <!-- 产品介绍 -->
      <Product/>
    </el-main>
  </el-container>
</template>

<script>
import Product from '@/components/Common/Product'
import Carousel from '@/components/Common/Carousel'

export default {
  components: {
    Product,
    Carousel
  }
}
</script>

<style scoped>
.el-main {
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px;
  overflow: hidden;
}
</style>
