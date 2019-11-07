<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img" />
        </el-carousel-item>
      </el-carousel>
      <!-- 产品中心 -->
      <div class="content">
        <el-menu
          :default-active="def"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
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
            <router-link to="/ProductSub">
              <img style="width: 300px; height: 200px" :src="product.img" />
              <p class="product-name">{{ product.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'

import SR_010 from '../../assets/Images/Product/苹果 OTG 转接线/SR-010.png'
import SR_010_A from '../../assets/Images/Product/苹果 OTG 转接线/SR-010-A.png'
import SR_011 from '../../assets/Images/Product/苹果 OTG 转接线/SR-011.png'
import SR_011_A from '../../assets/Images/Product/苹果 OTG 转接线/SR-011-A.png'

import SR_030 from '../../assets/Images/Product/苹果 OTG 网卡/SR-030.png'
import SR_030_A from '../../assets/Images/Product/苹果 OTG 网卡/SR-030-A.png'

import SR_111 from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111.png'
import SR_111_A from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-A.png'
import SR_021 from '../../assets/Images/Product/苹果 OTG 读卡器/SR-021.png'
import SR_111_A from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-A.png'
import SR_111_C from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-C.png'

import SR_222 from '../../assets/Images/Product/TYPE-C 读卡器/SR-222.png'
import SR_222_C from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-C.png'
import SR_222_A from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-A.png'
import SR_222_C from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-C.png'
import SR_222_B from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-B.png'

import SR_333 from '../../assets/Images/Product/TYPE-C HUB/SR-333.png'
import SR_555 from '../../assets/Images/Product/TYPE-C HUB/SR-555.png'
import SR_555_A from '../../assets/Images/Product/TYPE-C HUB/SR-555-A.png'
import SR_333_A from '../../assets/Images/Product/TYPE-C HUB/SR-333-A.png'

import SR_001 from '../../assets/Images/Product/苹果音频转接头/SR-001.png'
import SR_001_1 from '../../assets/Images/Product/苹果音频转接头/SR-001-1.png'
import SR_002 from '../../assets/Images/Product/苹果音频转接头/SR-002.png'
import SR_003 from '../../assets/Images/Product/苹果音频转接头/SR-003.png'
import SR_004 from '../../assets/Images/Product/苹果音频转接头/SR-004.png'
import SR_005 from '../../assets/Images/Product/苹果音频转接头/SR-005.png'

export default {
  data () {
    return {
      def: '1',
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 产品列表
      products: [
        {
          name: 'HDRM100 L1',
          type: '车载产品',
          img: luyou11
        },
        {
          name: 'HDRM100 L2',
          type: '车载产品',
          img: luyou22
        },
        {
          name: 'HDRM200',
          type: '车载产品',
          img: luyou33
        },
        {
          name: 'HDRM100 L11',
          type: '车载产品',
          img: luyou33
        },
        {
          name: 'HDRM100 L22',
          type: '车载产品',
          img: luyou11
        },
        {
          name: 'HDRM2030',
          type: '车载产品',
          img: luyou22
        },
        {
          name: 'HDR1046i',
          type: '网关&CPE',
          img: chezai01
        },
        {
          name: 'H00',
          type: '网关&CPE',
          img: chezai02
        },
        {
          name: 'DR146i',
          type: '网关&CPE',
          img: chezai01
        },
        {
          name: 'HD00',
          type: '网关&CPE',
          img: chezai02
        },
        {
          name: 'HR1046i',
          type: '网关&CPE',
          img: chezai01
        },
        {
          name: 'HD11300',
          type: '网关&CPE',
          img: chezai02
        },
        {
          name: 'HDR10146i',
          type: '工业路由/DTU',
          img: wangguan22
        },
        {
          name: 'H12300',
          type: '工业路由/DTU',
          img: wangguan11
        },
        {
          name: 'HDR146i',
          type: '工业路由/DTU',
          img: wangguan22
        },
        {
          name: 'D1020',
          type: '工业路由/DTU',
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
    select (type) {
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
    let name = this.$route.params.name
    this.select(name)
    switch (name) {
      case '车载产品': this.def = '1'; break
      case '工业路由/DTU': this.def = '2'; break
      case '网关&CPE': this.def = '3'; break
      case '定位器': this.def = '4'; break
      case '消费类': this.def = '5'; break
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
