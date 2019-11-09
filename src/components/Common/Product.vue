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
      <el-menu-item index="1" @click="selectType('type01')">车载产品</el-menu-item>
      <el-menu-item index="2" @click="selectType('type02')">工业路由/DTU</el-menu-item>
      <el-menu-item index="3" @click="selectType('type03')">网关&CPE</el-menu-item>
      <el-menu-item index="4" @click="selectType('type04')">定位器</el-menu-item>
      <el-menu-item index="5" @click="selectType('type05')">消费类</el-menu-item>
    </el-menu>
    <div class="products-content">
      <div class="recommend">推荐产品</div>
      <div class="product" v-for="product in currentList" :key="product.name">
        <router-link to="/ProductSub">
          <img style="width: 300px; height: 200px" :src="product.img">
          <p class="product-name">{{ product.name }}</p>
        </router-link>
      </div>
    </div>
  </el-container>
</template>

<script>
import SR_010 from '../../assets/Images/Product/苹果 OTG 转接线/SR-010.png'

export default {
  data () {
    return {
      // 产品列表
      products: [
        {
          name: 'SR-010',
          type: '苹果 OTG 转接线',
          img: SR_010
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

.recommend {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin-left: 100px;
}

a {
  color: black;
  text-decoration-line: none;
}
</style>
