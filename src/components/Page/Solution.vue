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
      <div class="content">
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
          <el-menu-item index="1" @click="selectSolution('车载 T-BOX方案')">车载 T-BOX方案</el-menu-item>
          <el-menu-item index="2" @click="selectSolution('智慧交通解决方案')">智慧交通解决方案</el-menu-item>
          <el-menu-item index="3" @click="selectSolution('能源监测解决方案')">能源监测解决方案</el-menu-item>
          <el-menu-item index="4" @click="selectSolution('化工管道监控解决方案')">化工管道监控解决方案</el-menu-item>
          <el-menu-item index="5" @click="selectSolution('电梯物联网解决方案')">电梯物联网解决方案</el-menu-item>
        </el-menu>
        <div class="solution">
          <p class="solution-title">{{ currentSolution.name }}</p>
          <p class="solution-content">{{ currentSolution.content }}</p>
          <img style="width: 700px; height: 200px" :src="currentSolution.img">
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'
import luyou11 from '../../assets/Images/Product/Type01/luyou01.jpg'
import luyou22 from '../../assets/Images/Product/Type01/luyou02.jpg'
import luyou33 from '../../assets/Images/Product/Type01/luyou03.jpg'

export default {
  data () {
    return {
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 解决方案列表
      solutions: [
        {
          name: '车载 T-BOX方案',
          content: '　　内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou11
        },
        {
          name: '智慧交通解决方案',
          content: '　　内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou22
        },
        {
          name: '能源监测解决方案',
          content: '　　内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou33
        },
        {
          name: '化工管道监控解决方案',
          content: '　　内容文字内容文字内容容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内,容文字内容文字内容文字内容文字内文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou22
        },
        {
          name: '电梯物联网解决方案',
          content: '　　内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内,容文字内容文字内容文字内容文字内,容文字内容文字内容文字内容文字内,容文字内容文字内容文字内容文字内容文字内容文字',
          img: luyou11
        }
      ],
      // 当前选择的产品列表
      currentSolution: {}
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 给予解决方案名称，
    selectSolution (name) {
      for (let i = 0; i < this.solutions.length; i++) {
        if (this.solutions[i].name === name) {
          this.currentSolution = this.solutions[i]
        }
      }
    }
  },
  mounted () {
    this.selectSolution('车载 T-BOX方案')
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
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

.solution {
  height: 100%;
  margin-left: 320px;
  margin-right: 20px;
}

.solution-title {
  font-size: 26px;
  font-weight: 600;
}

.solution-content {
  text-align: left;
}
</style>
