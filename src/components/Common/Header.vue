<template>
  <el-header height="80px">
    <div class="icon">
      <img width="80px" height="50px" src="../../assets/Images/Logo/logo2.png">
      <a @click="changePage('Index')" href="#">
        <span class="title">深圳市晟瑞实业有限公司</span>
      </a>
      <span class="tel">咨询电话：+86-755-85207786</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#000000"
    >
      <el-menu-item index="1" @click="changePage('Index')">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">关于我们</template>
        <el-menu-item index="2-1" @click="changePage('AboutUs', '公司简介')">公司简介</el-menu-item>
        <el-menu-item index="2-2" @click="changePage('AboutUs', '公司文化')">公司文化</el-menu-item>
        <el-menu-item index="2-3" @click="changePage('AboutUs', '公司使命')">公司使命</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">产品中心</template>
        <el-menu-item index="3-1" @click="changePage('Product', '车载产品')">车载产品</el-menu-item>
        <el-menu-item index="3-2" @click="changePage('Product', '工业路由/DTU')">工业路由/DTU</el-menu-item>
        <el-menu-item index="3-3" @click="changePage('Product', '网关&CPE')">网关&CPE</el-menu-item>
        <el-menu-item index="3-4" @click="changePage('Product', '定位器')">定位器</el-menu-item>
        <el-menu-item index="3-5" @click="changePage('Product', '消费类')">消费类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">解决方案</template>
        <el-menu-item index="4-1" @click="changePage('Solution', '车载 T-BOX方案')">车载 T-BOX方案</el-menu-item>
        <el-menu-item index="4-2" @click="changePage('Solution', '智慧交通解决方案')">智慧交通解决方案</el-menu-item>
        <el-menu-item index="4-3" @click="changePage('Solution', '能源监测解决方案')">能源监测解决方案</el-menu-item>
        <el-menu-item index="4-4" @click="changePage('Solution', '化工管道监控解决方案')">化工管道监控解决方案</el-menu-item>
        <el-menu-item index="4-5" @click="changePage('Solution', '电梯物联网解决方案')">电梯物联网解决方案</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">新闻资讯</template>
        <el-menu-item index="5-1" @click="changePage('News', '公司动态')">公司动态</el-menu-item>
        <el-menu-item index="5-2" @click="changePage('News', '行业新闻')">行业新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">联系我们</template>
        <el-menu-item index="6-1" @click="changePage('ContactUs', '联系方式')">联系方式</el-menu-item>
        <el-menu-item index="6-2" @click="changePage('ContactUs', '人才招聘')">人才招聘</el-menu-item>
        <el-menu-item index="6-3" @click="changePage('ContactUs', '网站留言')">网站留言</el-menu-item>
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

@media only screen and (max-width: 1600px) {
  .tel {
    display: none;
  }
}
</style>
