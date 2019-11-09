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
import SR_011 from '../../assets/Images/Product/苹果 OTG 转接线/SR-011.png'
import SR_010_A from '../../assets/Images/Product/苹果 OTG 转接线/SR-010-A.png'
import SR_011_A from '../../assets/Images/Product/苹果 OTG 转接线/SR-011-A.png'

import SR_030 from '../../assets/Images/Product/苹果 OTG 网卡/SR-030.png'
import SR_030_A from '../../assets/Images/Product/苹果 OTG 网卡/SR-030-A.png'

import SR_111 from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111.png'
import SR_021 from '../../assets/Images/Product/苹果 OTG 读卡器/SR-021.png'
import SR_111_A from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-A.png'
import SR_111_B from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-B.png'
import SR_111_C from '../../assets/Images/Product/苹果 OTG 读卡器/SR-111-C.png'

import SR_222 from '../../assets/Images/Product/TYPE-C 读卡器/SR-222.png'
import SR_222_A from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-A.png'
import SR_222_B from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-B.png'
import SR_222_C from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-C.png'
import SR_222_D from '../../assets/Images/Product/TYPE-C 读卡器/SR-222-D.png'

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
          name: 'SR-010',
          type: '苹果 OTG 转接线',
          img: SR_010
        },
        {
          name: 'SR-011',
          type: '苹果 OTG 转接线',
          img: SR_011
        },
        {
          name: 'SR-010-A',
          type: '苹果 OTG 转接线',
          img: SR_010_A
        },
        {
          name: 'SR-011-A',
          type: '苹果 OTG 转接线',
          img: SR_011_A
        },
        {
          name: 'SR-030',
          type: '苹果 OTG 网卡',
          img: SR_030
        },
        {
          name: 'SR-030-A',
          type: '苹果 OTG 网卡',
          img: SR_030_A
        },
        {
          name: 'SR-111',
          type: '苹果 OTG 读卡器',
          img: SR_111
        },
        {
          name: 'SR-021',
          type: '苹果 OTG 读卡器',
          img: SR_021
        },
        {
          name: 'SR-111-A',
          type: '苹果 OTG 读卡器',
          img: SR_111_A
        },
        {
          name: 'SR-111-B',
          type: '苹果 OTG 读卡器',
          img: SR_111_B
        },
        {
          name: 'SR-111-C',
          type: '苹果 OTG 读卡器',
          img: SR_111_C
        },
        {
          name: 'SR-222',
          type: 'TYPE-C 读卡器',
          img: SR_222
        },
        {
          name: 'SR-222-A',
          type: 'TYPE-C 读卡器',
          img: SR_222_A
        },
        {
          name: 'SR-222-B',
          type: 'TYPE-C 读卡器',
          img: SR_222_B
        },
        {
          name: 'SR-222-C',
          type: 'TYPE-C 读卡器',
          img: SR_222_C
        },
        {
          name: 'SR-222-D',
          type: 'TYPE-C 读卡器',
          img: SR_222_D
        },
        {
          name: 'SR-333',
          type: 'TYPE-C HUB',
          img: SR_333
        },
        {
          name: 'SR-555',
          type: 'TYPE-C HUB',
          img: SR_555
        },
        {
          name: 'SR-333-A',
          type: 'TYPE-C HUB',
          img: SR_333_A
        },
        {
          name: 'SR-555-A',
          type: 'TYPE-C HUB',
          img: SR_555_A
        },
        {
          name: 'SR-001',
          type: '苹果音频转接头',
          img: SR_001
        },
        {
          name: 'SR-001-1',
          type: '苹果音频转接头',
          img: SR_001_1
        },
        {
          name: 'SR-002',
          type: '苹果音频转接头',
          img: SR_002
        },
        {
          name: 'SR-003',
          type: '苹果音频转接头',
          img: SR_003
        },
        {
          name: 'SR-004',
          type: '苹果音频转接头',
          img: SR_004
        },
        {
          name: 'SR-005',
          type: '苹果音频转接头',
          img: SR_005
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
      case '苹果 OTG 转接线': this.def = '1'; break
      case '苹果 OTG 网卡': this.def = '2'; break
      case '苹果 OTG 读卡器': this.def = '3'; break
      case 'TYPE-C 读卡器': this.def = '4'; break
      case 'TYPE-C HUB': this.def = '5'; break
      case '苹果音频转接头': this.def = '6'; break
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
