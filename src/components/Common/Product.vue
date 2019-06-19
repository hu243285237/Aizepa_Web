<template>
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
      <el-menu-item index="1" @click="selectType">大屏汽车影音</el-menu-item>
      <el-menu-item index="2">单锭/双锭汽车影音</el-menu-item>
      <el-menu-item index="3">小屏汽车影音</el-menu-item>
      <el-menu-item index="4">汽车数字仪表</el-menu-item>
      <el-menu-item index="5">汽车定位系统</el-menu-item>
      <el-menu-item index="6">汽车辅助设备</el-menu-item>
    </el-menu>
    <div class="products-content">
      <div class="product" v-for="fit in fits" :key="fit">
        <img style="width: 200px; height: 200px" :src="url">
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      msg: 'Welcome to Your Vue.js App',
      products: [
        {
          name: '',
          type: '',
          imgSrc: ''
        },
        {
          name: '1',
          type: '1',
          imgSrc: ''
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectType () {
      alert(32)
    }
  }
}
</script>

<style scoped>
.el-menu {
  width: 400px;
}

.products-content {
  width: 100%;
  height: 100%;
  margin: 50px;
}

.product {
  width: 250px;
  height: 300px;
  margin: 20px;
  float: left;
}
</style>
