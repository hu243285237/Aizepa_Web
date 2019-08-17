<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img">
        </el-carousel-item>
      </el-carousel>
      <!-- 关于我们 -->
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
          <p class="menu-title">关于我们</p>
          <el-menu-item index="1" @click="select('公司简介')">公司简介</el-menu-item>
          <el-menu-item index="2" @click="select('公司文化')">公司文化</el-menu-item>
          <el-menu-item index="3" @click="select('公司使命')">公司使命</el-menu-item>
        </el-menu>
        <div class="solution">
          <p class="solution-content">{{ current.content }}</p>
          <img style="width: 700px; height: 200px" :src="current.img">
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
      def: '1',
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 列表
      array: [
        {
          name: '公司简介',
          content: '　　深圳市晟瑞实业有限公司成立于2013年，是由一群从事多年无线通讯、汽车影音多媒体、组成的团队，具有多年的物联网产品开发经验，对宽带、工业物联网及车联网等应用场景有资深的经验与理解。公司专注集成电路研发与销售 3G/4G/5G/WIFI 工业路由，4G/5G 网关，4G/ CPE/DTU，2G/4G/NB/CAT M跟踪器，车载T-BOX，行车记录仪，音视频转换等产品。同时，公司推出了物联网卡及设备远程管理于平台APP，为客户提供完整的系统解决方案。为工业设备连接，广告推送，安防监控，电力抄表,工业自劢化，车辆防盗，物流追踪，资产跟踪，数据分析，宽带覆盖等提供可靠的数据链路及运维管理解决方案。' +
          '\n　　2016年公司为了满足广大消费者的需求，针对手机/电脑周边的产品开发设计：音频转接线、OTG读卡器、Type-c HUB、HDMI转VGA等产品大量供应，为各大平台电商，礼品商、外贸企业提供订制，为不同规模的生产厂商提供完整的产品解决方案，简化产品开发流程；缩短开发周期；拥有完整、科学的质量管理体系，实力和产品质量获得业界的认可；欢迎各界朋友莅临参观指导和业务洽谈。' +
          '\n　　公司一直秉承“服务、专业、创新、信誉”的经营理念；“科技以人为本”的管理理念并以“效率、效果、效应、效益”的企业精神不断超越自我，持续创新，积极进取，为客户提供高品质，人性化、智能化、安全化的电子产品，迎接新一轮的快速发展；共创未来！',
          img: luyou11
        },
        {
          name: '公司文化',
          content: '我们的诚信' +
          '\n　　坚守诚信原则，重视个人操守；加强互信关系，巩固卓越商誉。' +
          '\n我们的积极' +
          '\n　　积极迎接挑战，勇于面对改变；主动学习新知，实现自我价值。' +
          '\n我们的专业' +
          '\n　　创造丰富资源，荟萃各方精英；积累中外经验，提升专业水平。' +
          '\n我们的团队' +
          '\n　　尊重不同文化，巩固卓越商誉；倡导平道沟通，发挥团队精神。' +
          '\n我们的创新' +
          '\n　　营造开发环境，鼓励创新思想；构思非凡意念，推动企业发展。',
          img: luyou22
        },
        {
          name: '公司使命',
          content: '我们的使命：为客户提供高质量和最大价值的专业化产品和服务。' +
          '\n我们的愿景：成为世界半导体电子元器件优秀品牌。' +
          '\n我们的价值观：诚信服务   成就客户  成就员工 ',
          img: luyou33
        }
      ],
      // 当前选择的列表
      current: {}
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 给予名称来选择
    select (name) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].name === name) {
          this.current = this.array[i]
        }
      }
    }
  },
  mounted () {
    let name = this.$route.params.name
    this.select(name)
    switch (name) {
      case '公司简介': this.def = '1'; break
      case '公司文化': this.def = '2'; break
      case '公司使命': this.def = '3'; break
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

.solution-title {
  font-size: 26px;
  font-weight: 600;
}

.solution-content {
  text-align: left;
  white-space: pre-wrap;
}
</style>
