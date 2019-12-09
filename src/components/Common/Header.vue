<template>
  <el-header height="80px">
    <div class="icon">
      <img width="80px" height="50px" src="../../assets/Images/Logo/logo2.png">
      <a @click="changePage('Product', '苹果 OTG 转接线')" href="#">
        <span class="title">深圳市晟瑞实业有限公司</span>
      </a>
      <span>咨询电话：+86-755-85207786</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#000000"
    >
      <el-menu-item index="1" @click="changePage('Product', '苹果 OTG 转接线')">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">关于我们</template>
        <el-menu-item index="2-1" @click="changePage('AboutUs', '公司简介')">公司简介</el-menu-item>
        <el-menu-item index="2-2" @click="changePage('AboutUs', '公司文化')">公司文化</el-menu-item>
        <el-menu-item index="2-3" @click="changePage('AboutUs', '公司使命')">公司使命</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">产品中心</template>
        <el-menu-item index="3-1" @click="changePage('Product', '苹果 OTG 转接线')">苹果 OTG 转接线</el-menu-item>
        <el-menu-item index="3-2" @click="changePage('Product', '苹果 OTG 网卡')">苹果 OTG 网卡</el-menu-item>
        <el-menu-item index="3-3" @click="changePage('Product', '苹果 OTG 读卡器')">苹果 OTG 读卡器</el-menu-item>
        <el-menu-item index="3-4" @click="changePage('Product', '苹果音频转接头')">苹果音频转接头</el-menu-item>
        <el-menu-item index="3-5" @click="changePage('Product', 'TYPE-C 读卡器')">TYPE-C 读卡器</el-menu-item>
        <el-menu-item index="3-6" @click="changePage('Product', 'TYPE-C HUB')">TYPE-C HUB</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">新闻资讯</template>
        <el-menu-item index="4-1" @click="changePage('News', '公司动态')">公司动态</el-menu-item>
        <el-menu-item index="4-2" @click="changePage('News', '行业新闻')">行业新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">联系我们</template>
        <el-menu-item index="5-1" @click="changePage('ContactUs', '联系方式')">联系方式</el-menu-item>
        <el-menu-item index="5-2" @click="changePage('ContactUs', '人才招聘')">人才招聘</el-menu-item>
        <el-menu-item index="5-3" @click="changePage('ContactUs', '网站留言')">网站留言</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
import eventBus from './EventBus'

export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    changePage (page, name) {
      let params = { name }
      this.$router.push({ name: page, params: params, query: { t: Date.now() } })
    },
    acceptFooterInfo () {
      eventBus.$on('changePage', (message) => {
        this.changePage(message.page, message.name)
        this.activeIndex = message.index
      })
    }
  },
  created: function () {
    this.acceptFooterInfo()
  }
}
</script>

<style scoped>
.el-header {
  margin: 0 8%;
}

.icon {
  height: inherit;
  float: left;
}

.icon > img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.el-menu {
  height: 65px;
  float: right;
  top: 50%;
  transform: translateY(-50%);
}

.title {
  color:black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0px;
  margin-left: 10px;
  margin-right: 10px;
}

a {
  color: black;
  text-decoration: none;
}
</style>
