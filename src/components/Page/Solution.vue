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
        :default-active="def"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
          <p class="menu-title">解决方案</p>
          <el-menu-item index="1" @click="select('车载 T-BOX方案')">车载 T-BOX方案</el-menu-item>
          <el-menu-item index="2" @click="select('智慧交通解决方案')">智慧交通解决方案</el-menu-item>
          <el-menu-item index="3" @click="select('能源监测解决方案')">能源监测解决方案</el-menu-item>
          <el-menu-item index="4" @click="select('化工管道监控解决方案')">化工管道监控解决方案</el-menu-item>
          <el-menu-item index="5" @click="select('电梯物联网解决方案')">电梯物联网解决方案</el-menu-item>
        </el-menu>
        <div class="solution">
          <p class="solution-content">{{ currentSolution.content }}</p>
          <img style="width: 800px; height: 350px" :src="currentSolution.img">
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'
import solution01 from '../../assets/Images/Solution/Solution01.png'
import solution02 from '../../assets/Images/Solution/Solution02.png'
import solution03 from '../../assets/Images/Solution/Solution03.png'
import solution04 from '../../assets/Images/Solution/Solution04.png'
import solution05 from '../../assets/Images/Solution/Solution05.png'

export default {
  data () {
    return {
      def: '1',
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 解决方案列表
      solutions: [
        {
          name: '车载 T-BOX方案',
          content: '　　4G车载盒子为车联网提供宽带接入，链路维护，热点共享，车辆数据上报等便捷可靠解决方案。同时，领佳物联云服务器可实现远程设备管理维护，24小时充值续费，开卡/关停，支持二维码，公众号，转账等充值接口。另外，我司还给客户定制APP，便于用户设备操作，维护，充值续费。该系统解决方案可为用户提供端、管、云一站式解决方案与服务。成功案例：国内某车厂。',
          img: solution01
        },
        {
          name: '智慧交通解决方案',
          content: '　　4G路由器提供可靠宽带数据接入，永久在线。为公交，长途大巴提供远程监控，广告信息发布， WIFI热点共享，优化公交运营，支付，定位等提供丏业化解决方案及定制化服务。领佳物联云服务器可实现远程设备管理维护，24小时充值续费，开卡/关停，支持二维码，公众号，转账等充值接口。',
          img: solution02
        },
        {
          name: '能源监测解决方案',
          content: '　　4G路由器提供可靠数据连接链路，永久在线。为光伏配电柜提供远程监控、数据传输、能源安全等提供工业化解决方案及定制化服务。成功案例：国内某厂光伏配电柜远程监控',
          img: solution03
        },
        {
          name: '化工管道监控解决方案',
          content: '　　4G路由器/DTU及远程管理云服务器为梯联网提供无线提供端、管、云一站式解决方案与服务。客户应用管理平台可以通过我们的系统收集分店信息，实现远程设备管理和优化系统运营。为用户宽带接入，远程监控，设备定位，数据采集/传输，数据分析，经营优化等提供工业化解决方案及定制化服务。',
          img: solution04
        },
        {
          name: '电梯物联网解决方案',
          content: '　　4G路由器/DTU及远程管理云服务器为梯联网提供无线提供端、管、云一站式解决方案与服务。客户应用管理平台可以通过我们的系统收集电梯信息，实现远程设备管理和优化系统运营。为电梯宽带接入，远程监控，设备定位，数据采集/传输，数据分析，运维优化等提供专业化解决方案及定制化服务。成功案例：国内某梯联网系统。',
          img: solution05
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
    select (name) {
      for (let i = 0; i < this.solutions.length; i++) {
        if (this.solutions[i].name === name) {
          this.currentSolution = this.solutions[i]
        }
      }
    }
  },
  mounted () {
    let name = this.$route.params.name
    this.select(name)
    switch (name) {
      case '车载 T-BOX方案': this.def = '1'; break
      case '智慧交通解决方案': this.def = '2'; break
      case '能源监测解决方案': this.def = '3'; break
      case '化工管道监控解决方案': this.def = '4'; break
      case '电梯物联网解决方案': this.def = '5'; break
    }
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

.solution-content {
  text-align: left;
}
</style>
