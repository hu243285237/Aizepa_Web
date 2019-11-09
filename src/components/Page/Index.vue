<template>
  <el-container>
    <el-main>
      <!-- 产品介绍 -->
      <Product/>
    </el-main>
  </el-container>
</template>

<script>
import Product from '@/components/Common/Product'

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
