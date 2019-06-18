<template>
  <div class="product">
    <el-container>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">大屏汽车影音</el-menu-item>
        <el-menu-item index="2">单锭/双锭汽车影音</el-menu-item>
        <el-menu-item index="3">小屏汽车影音</el-menu-item>
        <el-menu-item index="4">汽车数字仪表</el-menu-item>
        <el-menu-item index="5">汽车定位系统</el-menu-item>
        <el-menu-item index="6">汽车辅助设备</el-menu-item>
      </el-menu>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu {
  width: 300px;
}
</style>
