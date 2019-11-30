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
          <el-menu-item index="1" @click="toProduct('Product', '苹果 OTG 转接线')">苹果 OTG 转接线</el-menu-item>
          <el-menu-item index="2" @click="toProduct('Product', '苹果 OTG 网卡')">苹果 OTG 网卡</el-menu-item>
          <el-menu-item index="3" @click="toProduct('Product', '苹果 OTG 读卡器')">苹果 OTG 读卡器</el-menu-item>
          <el-menu-item index="4" @click="toProduct('Product', '苹果音频转接头')">苹果音频转接头</el-menu-item>
          <el-menu-item index="5" @click="toProduct('Product', 'TYPE-C 读卡器')">TYPE-C 读卡器</el-menu-item>
          <el-menu-item index="6" @click="toProduct('Product', 'TYPE-C HUB')">TYPE-C HUB</el-menu-item>
        </el-menu>
        <div class="product">
          <p class="product-title">{{ product.name }}</p>
          <img class="product-img" style="width: 225px; height: 200px" :src="product.img" />
          <p class="product-title">产品介绍：</p>
          <p class="product-introduce">{{ product.introduce }}</p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      def: '1',
      product: {}
    }
  },
  methods: {
    // 跳转到产品中心页面
    toProduct (page, name) {
      let params = { name }
      this.$router.push({ name: page, params: params })
    }
  },
  mounted () {
    this.product = this.$route.params
    let type = this.product.type
    type = (type === undefined ? '苹果 OTG 转接线' : type)
    switch (type) {
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
  display: block;
}

.product-introduce {
  margin-left: 100px;
  float: left;
  text-align: left;
}
</style>
