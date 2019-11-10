<template>
  <el-container>
    <!-- 产品介绍 -->
    <Product/>
  </el-container>
</template>

<script>
import Product from '@/components/Page/Product'

export default {
  components: {
    Product
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
