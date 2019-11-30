<template>
  <el-container>
    <el-main>
      <!-- 产品中心 -->
      <div class="content">
        <el-menu
          :default-active="def"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <p class="menu-title">产品中心</p>
          <el-menu-item index="1" @click="select('苹果 OTG 转接线')">苹果 OTG 转接线</el-menu-item>
          <el-menu-item index="2" @click="select('苹果 OTG 网卡')">苹果 OTG 网卡</el-menu-item>
          <el-menu-item index="3" @click="select('苹果 OTG 读卡器')">苹果 OTG 读卡器</el-menu-item>
          <el-menu-item index="4" @click="select('苹果音频转接头')">苹果音频转接头</el-menu-item>
          <el-menu-item index="5" @click="select('TYPE-C 读卡器')">TYPE-C 读卡器</el-menu-item>
          <el-menu-item index="6" @click="select('TYPE-C HUB')">TYPE-C HUB</el-menu-item>
        </el-menu>
        <div class="products-content">
          <div class="product" v-for="product in currentList" :key="product.name">
            <a @click="toProductSub('ProductSub', product)">
              <img style="width: 225px; height: 200px" :src="product.img" />
              <p class="product-name">{{ product.name }}</p>
            </a>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import products from '../Common/Products.js'

export default {
  data () {
    return {
      def: '1',
      // 产品列表
      products,
      // 当前选择的产品列表
      currentList: {}
    }
  },
  methods: {
    // 给予产品类别，返回此类别的产品数组
    select (type) {
      var arr = []
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].type === type) {
          arr.push(this.products[i])
        }
      }
      this.currentList = arr
    },
    // 跳转到具体产品介绍界面
    toProductSub (name, product) {
      this.$router.push({ name, params: product })
    }
  },
  mounted () {
    let name = this.$route.params.name
    name = (name === undefined ? '苹果 OTG 转接线' : name)
    this.select(name)
    switch (name) {
      case '苹果 OTG 转接线': this.def = '1'; break
      case '苹果 OTG 网卡': this.def = '2'; break
      case '苹果 OTG 读卡器': this.def = '3'; break
      case '苹果音频转接头': this.def = '4'; break
      case 'TYPE-C 读卡器': this.def = '5'; break
      case 'TYPE-C HUB': this.def = '6'; break
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
  cursor: pointer;
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
  width: 23%;
  height: 250px;
  float: left;
}

.product-name {
  margin: 0px;
  padding: 0px;
  font-weight: 600;
}
</style>
