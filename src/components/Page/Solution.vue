<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img">
        </el-carousel-item>
      </el-carousel>
      <!-- 解决方案 -->
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <p class="menu-title">解决方案</p>
      <el-menu-item index="1" @click="selectType('type01')">车载 T-BOX方案</el-menu-item>
      <el-menu-item index="2" @click="selectType('type02')">智慧交通解决方案</el-menu-item>
      <el-menu-item index="3" @click="selectType('type03')">能源监测解决方案</el-menu-item>
      <el-menu-item index="4" @click="selectType('type04')">化工管道监控解决方案</el-menu-item>
      <el-menu-item index="5" @click="selectType('type05')">电梯物联网解决方案</el-menu-item>
    </el-menu>
    <div class="products-content">
      
    </div>
    </el-main>
  </el-container>
</template>

<script>
import luyou11 from '../../assets/Images/Product/Type01/luyou01.jpg'
import luyou22 from '../../assets/Images/Product/Type01/luyou02.jpg'
import luyou33 from '../../assets/Images/Product/Type01/luyou03.jpg'

export default {
  data () {
    return {
      // 产品列表
      solutions: [
        {
          name: 'solution01',
          content: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou11
        },
        {
          name: 'solution02',
          content: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou22
        },
        {
          name: 'solution03',
          content: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou33
        },
        {
          name: 'solution04',
          content: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou22
        },
        {
          name: 'solution05',
          content: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou11
        }
      ],
      // 当前选择的产品列表
      currentList: {}
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 给予产品类别，返回此类别的产品数组
    selectType (type) {
      var arr = []
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].type === type) {
          arr.push(this.products[i])
        }
      }
      this.currentList = arr
    }
  },
  mounted () {
    this.selectType('type01')
  }
}
</script>

<style scoped>
.el-container {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 500px;
}

.el-menu {
  width: 25%;
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
  width: 33%;
  height: 250px;
  float: left;
}

.product-name {
  margin: 0px;
  padding: 0px;
}
</style>
