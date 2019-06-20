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
      <p class="menu-title">主要方案</p>
      <el-menu-item index="1" @click="selectType('type01')">大屏汽车影音</el-menu-item>
      <el-menu-item index="2" @click="selectType('type02')">单锭/双锭汽车影音</el-menu-item>
      <el-menu-item index="3" @click="selectType('type03')">小屏汽车影音</el-menu-item>
      <el-menu-item index="4" @click="selectType('type04')">汽车数字仪表</el-menu-item>
      <el-menu-item index="5" @click="selectType('type05')">汽车定位系统</el-menu-item>
      <el-menu-item index="6" @click="selectType('type06')">汽车辅助设备</el-menu-item>
    </el-menu>
    <div class="products-content">
      <div class="product" v-for="product in currentList" :key="product.name">
        <img style="width: 300px; height: 200px" :src="product.img">
        <span>{{ product.name }}</span>
      </div>
    </div>
  </el-container>
</template>

<script>
import luyou11 from '../../assets/Images/Product/Type01/luyou01.jpg'
import luyou22 from '../../assets/Images/Product/Type01/luyou02.jpg'
import luyou33 from '../../assets/Images/Product/Type01/luyou03.jpg'
import wangguan11 from '../../assets/Images/Product/Type02/wangguan01.jpg'
import wangguan22 from '../../assets/Images/Product/Type02/wangguan02.jpg'
import chezai01 from '../../assets/Images/Product/Type03/chezai01.jpg'
import chezai02 from '../../assets/Images/Product/Type03/chezai02.jpg'

export default {
  data () {
    return {
      // 产品列表
      products: [
        {
          name: 'HDRM100 L1',
          type: 'type01',
          img: luyou11
        },
        {
          name: 'HDRM100 L2',
          type: 'type01',
          img: luyou22
        },
        {
          name: 'HDRM200',
          type: 'type01',
          img: luyou33
        },
        {
          name: 'HDRM100 L11',
          type: 'type01',
          img: luyou33
        },
        {
          name: 'HDRM100 L22',
          type: 'type01',
          img: luyou11
        },
        {
          name: 'HDRM2030',
          type: 'type01',
          img: luyou22
        },
        {
          name: 'HDR00 L1',
          type: 'type01',
          img: luyou22
        },
        {
          name: 'HDRM1100 L2',
          type: 'type01',
          img: luyou33
        },
        {
          name: 'HDR1046i',
          type: 'type03',
          img: chezai01
        },
        {
          name: 'H00',
          type: 'type03',
          img: chezai02
        },
        {
          name: 'DR146i',
          type: 'type03',
          img: chezai01
        },
        {
          name: 'HD00',
          type: 'type03',
          img: chezai02
        },
        {
          name: 'HR1046i',
          type: 'type03',
          img: chezai01
        },
        {
          name: 'HD11300',
          type: 'type03',
          img: chezai02
        },
        {
          name: 'HDR10146i',
          type: 'type02',
          img: wangguan22
        },
        {
          name: 'H12300',
          type: 'type02',
          img: wangguan11
        },
        {
          name: 'HDR146i',
          type: 'type02',
          img: wangguan22
        },
        {
          name: 'D1020',
          type: 'type02',
          img: wangguan11
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
  height: 750px;
}

.el-menu {
  width: 400px;
}

.menu-title {
  color: white;
  font-size: 26px;
  margin: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #363636;
}

.products-content {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.product {
  width: 300px;
  height: 250px;
  margin-left: 63px;
  float: left;
}
</style>
